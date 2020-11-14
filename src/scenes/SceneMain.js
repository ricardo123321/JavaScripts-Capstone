import { Player } from './Entities';
import { ChaserShip } from './Entities';
import { GunShip } from './Entities';
import { CarrierShip } from './Entities';
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
    this.load.audio("explosion_somewhere_far", "assets/explosion_somewhere_far.mp3");
    this.load.audio("xeon6", "assets/xeon6.ogg");
    this.load.audio("rock_breaking", "assets/rock_breaking.flac");
    this.load.audio("rlaunch", "assets/rlaunch.wav");
    this.load.audio("flaunch", "assets/flaunch.wav");
  }

  create() {
    this.add.image(380, 300, 'bg_1_1');
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
      explosions: this.sound.add("explosion_somewhere_far"),
      laser: [
        this.sound.add("rlaunch"),
        this.sound.add("flaunch")
      ]
    };
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "starship"
    );
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
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];

      enemy.update();
    }
  }
}