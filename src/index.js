import 'phaser';
import { SceneMain } from './scenes/SceneMain';
import { SceneMainMenu } from './scenes/SceneMainMenu';
import { SceneGameOver } from './scenes/SceneGameOver';

let game
let config = {
  type: Phaser.WEBGL,
  width: 450,
  height: 640,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
     gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver
  ],
  pixelArt: true,
  roundPixels: true,
  autoCenter: Phaser.Scale.CENTER_BOTH
};

game = new Phaser.Game(config);