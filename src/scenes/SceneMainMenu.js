import { ScrollingBackground } from './scrollingBackground';

export class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', 'assets/sprBg0.png');
    this.load.image('sprBg1', 'assets/sprBg1.png');
    this.load.image('sprBtnPlay', 'assets/sprBtnPlay.png');
    this.load.image('sprBtnPlayHover', 'assets/sprBtnPlayHover.png');
    this.load.image('sprBtnPlayDown', 'assets/sprBtnPlayDown.png');
    this.load.image('sprBtnRecord', 'assets/sprBtnRecord.png');
    this.load.image('sprBtnRecordHover', 'assets/sprBtnRecordHover.png');
    this.load.image('sprBtnRecordDown', 'assets/sprBtnRecordDown.png');
    this.load.audio('sndBtnOver', 'assets/sndBtnOver.wav');
    this.load.audio('sndBtnDown', 'assets/sndBtnDown.wav');
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };

    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.25,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );

    this.btnPlay.setInteractive();

    this.btnPlay.on('pointerover', function () {
      this.btnPlay.setTexture('sprBtnPlayHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnPlay.on('pointerout', function () {
      this.setTexture('sprBtnPlay');
    });

    this.btnPlay.on('pointerdown', function () {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnPlay.on('pointerup', function () {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);

    this.btnRecord = this.add.sprite(
      this.game.config.width * 0.75,
      this.game.config.height * 0.5,
      'sprBtnRecord',
    );

    this.btnRecord.setInteractive();

    this.btnRecord.on('pointerover', function () {
      this.btnRecord.setTexture('sprBtnRecordHover');
      this.sfx.btnOver.play();
    }, this);

    this.btnRecord.on('pointerout', function () {
      this.setTexture('sprBtnRecord');
    });

    this.btnRecord.on('pointerdown', function () {
      this.btnRecord.setTexture('sprBtnRecordDown');
      this.sfx.btnDown.play();
    }, this);

    this.btnRecord.on('pointerup', function () {
      this.btnRecord.setTexture('sprBtnRecord');
      this.scene.start('LeaderBoard');
    }, this);

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SPACE SHOOTER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    this.backgrounds = [];
    for (let i = 0; i < 5; i += 1) {
      const keys = ['sprBg0', 'sprBg1'];
      const key = keys[Phaser.Math.Between(0, keys.length - 1)];
      const bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}