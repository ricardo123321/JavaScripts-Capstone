import { Entity } from './Entities';
import { EnemyLaser } from './EnemyLaser';

export class GunShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'ufodark', 'GunShip');
    this.play('ufodark');

    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
    this.setData('score', 300);
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}