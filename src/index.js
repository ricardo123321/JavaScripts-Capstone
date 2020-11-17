import 'phaser';

import { SceneMain } from './scenes/SceneMain';

var config = {
  type: Phaser.WEBGL,
  width: 680,
  height: 640,
  backgroundColor: "black",
  physics: {
    default: "arcade",
    arcade: {
     gravity: { x: 0, y: 0 }
    }
  },
  scene: [
    SceneMain,
  ],
  pixelArt: true,
  roundPixels: true,
  autoCenter: Phaser.Scale.CENTER_BOTH
};

game = new Phaser.Game(config);
game.scale.pageAlignHorizontally = true;
game.scale.pageAlignVertically = true;