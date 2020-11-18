import {ScrollingBackground} from './scrollingBackground'
import { getLocalScores } from '../LocalStr';
import { submitHighScore } from '../ScoreBoard';

export class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "SceneGameOver" });
  }
  preload() {
    this.load.image("sprBtnRestart", "assets/sprBtnRestart.png");
    this.load.image("sprBtnRestartHover", "assets/sprBtnRestartHover.png");
    this.load.image("sprBtnRestartDown", "assets/sprBtnRestartDown.png");
    this.load.image("sprBg0", "assets/sprBg0.png");
    this.load.image("sprBg1", "assets/sprBg1.png");
  }
  create() {

    this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center'
    });
    this.title.setOrigin(0.5);

    this.sfx = {
      btnOver: this.sound.add("sndBtnOver"),
      btnDown: this.sound.add("sndBtnDown")
    };

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprBtnRestart"
    );

    this.btnRestart.setInteractive();

    this.btnRestart.on("pointerover", function() {
      this.btnRestart.setTexture("sprBtnRestartHover");
      this.sfx.btnOver.play();
    }, this);

    this.btnRestart.on("pointerout", function() {
      this.setTexture("sprBtnRestart");
    });

    this.btnRestart.on("pointerdown", function() {
      this.btnRestart.setTexture("sprBtnRestartDown");
      this.sfx.btnDown.play();
    }, this);

    this.btnRestart.on("pointerup", function() {
      this.btnRestart.setTexture("sprBtnRestart");
      this.scene.start("SceneMain");
    }, this);

    this.backgrounds = [];
    for (var i = 0; i < 5; i++) {
      var keys = ["sprBg0", "sprBg1"];
      var key = keys[Phaser.Math.Between(0, keys.length - 1)];
      var bg = new ScrollingBackground(this, key, i * 10);
      this.backgrounds.push(bg);
    }

    this.scores = getLocalScores();
    this.gameOverSceneScore = this.add.text(
      this.game.config.width * 0.6,
      this.game.config.height * 0.72,
      `Score: ${this.scores[0]}`, {
        color: '#d0c600',
        fontFamily: 'sans-serif',
        fontSize: '30px',
        lineHeight: 1.3,
        align: 'center',
      },
    );

    this.userName = '';

    const div = document.createElement('div');
    div.innerHTML = `
      <input type="text" id="nameField" placeholder="Enter your name" style="font-size: 1.5rem width: ${this.game.config.width * 0.25}"><br>
      <input type="button" name="submitButton" value="Submit Score" style="font-size: 1.5rem">
    `;

    const element = this.add.dom(280, 480, div);
    element.addListener('click');

    element.on('click', (event) => {
      if (event.target.name === 'submitButton') {
        const inputText = document.getElementById('nameField');
        if (inputText.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          this.userName = inputText.value;
          this.submit = submitHighScore(this.userName, this.scores[0]);
          this.submit.then(() => {
            this.scene.start('LeaderBoard');
          });
        }
      }
    });
  }

  update() {
    for (var i = 0; i < this.backgrounds.length; i++) {
      this.backgrounds[i].update();
    }
  }
}