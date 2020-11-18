import {Entity} from './Entities'
export class EnemyLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "projectile1");
    this.body.velocity.y = 200;
  }
}