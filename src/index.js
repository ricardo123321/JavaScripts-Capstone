import 'phaser';

const gameConfig = {
  type: Phaser.WEBGL,
  width: 480,
  height: 640,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: [SceneMainMenu,
    SceneMain,
    SceneGameOver],
  pixelArt: true,
  roundPixels: true
};

new Phaser.Game(gameConfig);