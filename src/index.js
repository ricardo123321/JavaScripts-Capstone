import 'phaser';

import { SceneMain } from './scenes/SceneMain';

const gameConfig = {
  type: Phaser.AUTO,
  width: 680,
  height: 400,
  scene: SceneMain
};

new Phaser.Game(gameConfig);