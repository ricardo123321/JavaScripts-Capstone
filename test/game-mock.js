import Phaser from 'phaser';
import {SceneMainMenu} from '../src/scenes/SceneMainMenu';
import {SceneMain} from '../src/scenes/SceneMain';
import {SceneGameOver} from '../src/scenes/SceneGameOver';
import {LeaderBoard} from '../src/scenes/LeaderBoard';

export function gameRun() {
  const config = {
    type: Phaser.WEBGL,
    parent: 'divld',
    width: 480,
    height: 640,
    backgroundColor: 'black',
    dom: {
      createContainer: true,
    },
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
      LeaderBoard
    ],
    pixelArt: true,
    roundPixels: true,
  };

  const game = new Phaser.Game(config);

  return game;
}
