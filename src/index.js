import 'phaser';
import { SceneMain } from './scenes/SceneMain';
import { SceneMainMenu } from './scenes/SceneMainMenu';
import { SceneGameOver } from './scenes/SceneGameOver';
import { LeaderBoard } from './scenes/LeaderBoard';

const config = {
  type: Phaser.WEBGL,
  parent: 'divld',
  dom: {
    createContainer: true,
  },
  width: 450,
  height: 640,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    SceneMainMenu,
    SceneMain,
    SceneGameOver,
    LeaderBoard,
  ],
  pixelArt: true,
  roundPixels: true,
  autoCenter: Phaser.Scale.CENTER_BOTH,
};

const game = new Phaser.Game(config);