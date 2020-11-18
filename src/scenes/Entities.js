class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);

    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData("type", type);
    this.setData("isDead", false);
  }
  explode(canDestroy) {
    if (!this.getData("isDead")) {
      this.setTexture("exp2_0");  // this refers to the same animation key we used when we added this.anims.create previously
      this.play("exp2_0");
      this.scene.sfx.explosions.play();
      if (this.shootTimer !== undefined) {
        if (this.shootTimer) {
          this.shootTimer.remove(false);
        }
      }
      this.setAngle(0);
      this.body.setVelocity(0, 0);
      this.on('animationcomplete', function() {
        if (canDestroy) {
          this.destroy();
        }
        else {
          this.setVisible(false);
        }
      }, this);
      this.setData("isDead", true);
    }
  }
}

export class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, "Player");
    this.setData("speed", 200);
    this.setData("isShooting", false);
    this.setData("timerShootDelay", 10);
    this.setData("timerShootTick", this.getData("timerShootDelay") - 1);
  }

  moveUp() {
    this.body.velocity.y = -this.getData("speed");
  }
  moveDown() {
    this.body.velocity.y = this.getData("speed");
  }
  moveLeft() {
    this.body.velocity.x = -this.getData("speed");
  }
  moveRight() {
    this.body.velocity.x = this.getData("speed");
  }

  onDestroy() {
    this.scene.time.addEvent({
      delay: 1000,
      callback: function() {
        this.scene.scene.start("SceneGameOver");
      },
      callbackScope: this,
      loop: false
    });
  }

update() {
  this.body.setVelocity(0, 0);
  this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
  this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
  if (this.getData("isShooting")) {
    if (this.getData("timerShootTick") < this.getData("timerShootDelay")) {
      this.setData("timerShootTick", this.getData("timerShootTick") + 1);
    }
    else { 
      var laser = new PlayerLaser(this.scene, this.x, this.y);
      this.scene.playerLasers.add(laser);
    
      this.scene.sfx.laser.play();
      this.setData("timerShootTick", 0);
    }
  }
}
}

export class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "torpedo");
    this.body.velocity.y = -200;
  }
}

export class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "projectile1");
    this.body.velocity.y = 200;
  }
}

export class ChaserShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "ufo", "ChaserShip");
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.states = {
      MOVE_DOWN: "MOVE_DOWN",
      CHASE: "CHASE"
    };
    this.state = this.states.MOVE_DOWN;
  }
  update(){
    if (!this.getData("isDead") && this.scene.player) {
      if (Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y
      ) < 320) {

        this.state = this.states.CHASE;
      }

      if (this.state == this.states.CHASE) {
        var dx = this.scene.player.x - this.x;
        var dy = this.scene.player.y - this.y;

        var angle = Math.atan2(dy, dx);

        var speed = 100;
        this.body.setVelocity(
          Math.cos(angle) * speed,
          Math.sin(angle) * speed
        );
      }
    }
  }
}

export class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "ufodark", "GunShip");
    this.play("ufodark");

    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback: function() {
        var laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true
    });
  }
  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}

export class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "starshipdark", "CarrierShip");
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.angle -= 180;
    this.play("starshipdark");
  }
}