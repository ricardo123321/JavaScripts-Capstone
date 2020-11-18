import { Player } from './Entities/Player';
import { ChaserShip } from './Entities/ChaserShip';
import { GunShip } from './Entities/GunShip';
import { CarrierShip } from './Entities/CarrierShip';
export class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }

  preload() {
    this.load.image('bg_1_1', 'assets/bg_1_1.png');
    this.load.image('flag', 'assets/flag.svg');
    this.load.image('projectile1', 'assets/projectile1.svg');
    this.load.image('starship', 'assets/starship.svg', );
    this.load.image('starshipdark', 'assets/starshipdark.svg');
    this.load.image('projectile2', 'assets/projectile2.svg');
    this.load.image('ufo', 'assets/ufo.svg');
    this.load.image('ufodark', 'assets/ufodark.svg');
    this.load.image('torpedo', 'assets/torpedo.svg');
    this.load.image('torpedodark', 'assets/torpedodark.svg');
    this.load.spritesheet("exp2_0", "assets/exp2_0.png", {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.audio("xeon6", "assets/xeon6.ogg");
    this.load.audio("rlaunch", "assets/rlaunch.wav");
    this.load.audio("flaunch", "assets/flaunch.wav");
  }

  create() {
    this.add.image(300, 320, 'bg_1_1');
    this.anims.create({
      key: "bg_1_1",
      frames: this.anims.generateFrameNumbers("ufo"),
      frameRate: 20,
      repeat: -1
    });
    
    this.anims.create({
      key: "exp2_0",
      frames: this.anims.generateFrameNumbers("exp2_0"),
      frameRate: 20,
      repeat: 0
    });

    this.sfx = {
      explosions: this.sound.add("flaunch"),
      laser:  this.sound.add("rlaunch")
    };
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "starship"
    );


    this.hpBar = [
      'hp0Of5', 'hp1Of5', 'hp2Of5', 'hp3Of5', 'hp4Of5', 'hp5Of5',
    ];

    this.sceneScore = this.add.text(
      this.game.config.width * 0.025,
      this.game.config.height * 0.925,
      `Score: ${this.player.getData('score')}`, {
        color: '#d0c600',
        fontFamily: 'sans-serif',
        fontSize: '3vw',
        lineHeight: 1.3,
      },
    );

    this.updateHPBar(this.player);

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  this.enemies = this.add.group();
this.enemyLasers = this.add.group();
this.playerLasers = this.add.group();
this.time.addEvent({
  delay: 1000,
  callback: function() {
    var enemy = null;

    if (Phaser.Math.Between(0, 10) >= 3) {
      enemy = new GunShip(
        this,
        Phaser.Math.Between(0, this.game.config.width),
        0
      );
    }
    else if (Phaser.Math.Between(0, 10) >= 5) {
      if (this.getEnemiesByType("ChaserShip").length < 5) {

        enemy = new ChaserShip(
          this,   
          Phaser.Math.Between(0, this.game.config.width),
          0
        );
      }
    }
    else {
      enemy = new CarrierShip(
        this,
        Phaser.Math.Between(0, this.game.config.width),
        0
      );
    }

    if (enemy !== null) {
      enemy.setScale(Phaser.Math.Between(10, 20) * 0.1);
      this.enemies.add(enemy);
    }
  },
  callbackScope: this,
  loop: true
});
this.physics.add.collider(this.playerLasers, this.enemies, (playerLaser, enemy) => {
  if (enemy && !this.player.getData('isDead')) {
      this.player.setScore(enemy.getData('score'));
      enemy.explode(true);
    playerLaser.destroy();
  }
});
this.physics.add.collider(this.player, this.enemyLasers, (player, laser) => {
  if (!player.getData('isDead')
      && !laser.getData('isDead')) {
    if (player.updateHealth()) {
      player.explode(false);
      laser.destroy();
      player.onDestroy();
    } else {
      laser.destroy();
      this.updateHPBar(this.player);
    }
  }
});

this.physics.add.collider(this.player, this.enemies, (player, enemy) => {
  if (!player.getData('isDead')
      && !enemy.getData('isDead')) {
    if (player.updateHealth()) {
      player.explode(false);

      if (enemy.onDestroy !== undefined) {
        enemy.onDestroy();
      }
      player.setScore(enemy.getData('score'));
      enemy.destroy();

      player.onDestroy();
    } else {
      if (enemy.onDestroy !== undefined) {
        player.setScore(enemy.getData('score'));
        enemy.onDestroy();
      }
      enemy.destroy();
      this.updateHPBar(this.player);
    }
  }
});

  }
  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }
  update(){
    this.player.update();
    this.sceneScore.text = `Score: ${this.player.getData('score')}`;

    if (!this.player.getData("isDead")) {
      this.player.update();
      if (this.keyW.isDown) {
        this.player.moveUp();
      }
      else if (this.keyS.isDown) {
        this.player.moveDown();
      }
      if (this.keyA.isDown) {
        this.player.moveLeft();
      }
      else if (this.keyD.isDown) {
        this.player.moveRight();
      }
    
      if (this.keySpace.isDown) {
        this.player.setData("isShooting", true);
      }
      else {
        this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
        this.player.setData("isShooting", false);
      }
    }

    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];

      enemy.update();
      if (enemy.x < -enemy.displayWidth ||
        enemy.x > this.game.config.width + enemy.displayWidth ||
        enemy.y < -enemy.displayHeight * 4 ||
        enemy.y > this.game.config.height + enemy.displayHeight) {
    
        if (enemy) {
          if (enemy.onDestroy !== undefined) {
            enemy.onDestroy();
          }
    
          enemy.destroy();
        }
    }
    }
    for (var i = 0; i < this.enemyLasers.getChildren().length; i++) {
      var laser = this.enemyLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }

    for (var i = 0; i < this.playerLasers.getChildren().length; i++) {
      var laser = this.playerLasers.getChildren()[i];
      laser.update();

      if (laser.x < -laser.displayWidth ||
        laser.x > this.game.config.width + laser.displayWidth ||
        laser.y < -laser.displayHeight * 4 ||
        laser.y > this.game.config.height + laser.displayHeight) {
        if (laser) {
          laser.destroy();
        }
      }
    }
  }
  updateHPBar(player) {
    this.sceneHPBar = this.add.image(
      this.game.config.width * 0.3,
      this.game.config.height * 0.05,
      this.hpBar[player.getData('health')],
    );
  }
}