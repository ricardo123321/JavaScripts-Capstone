export class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: "SceneMain" });
  }

  preload() {
    this.load.image('bg_1_1', 'assets/bg_1_1.png');
    this.load.image('flag', 'assets/flag.svg');
    this.load.image('projectile1', 'assets/projectile1.svg');
    this.load.image('starship', 'assets/starship.svg');
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
      key: "ufo",
      frames: this.anims.generateFrameNumbers("ufo"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "ufodark",
      frames: this.anims.generateFrameNumbers("ufodark"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "exp2_0",
      frames: this.anims.generateFrameNumbers("exp2_0"),
      frameRate: 20,
      repeat: 0
    });

    this.anims.create({
      key: "starship",
      frames: this.anims.generateFrameNumbers("starship"),
      frameRate: 20,
      repeat: -1
    });

    this.sfx = {
      explosions: this.sound.add("explosion_somewhere_far"),
      laser: [
        this.sound.add("rlaunch"),
        this.sound.add("flaunch")
      ]
    };
  }
}