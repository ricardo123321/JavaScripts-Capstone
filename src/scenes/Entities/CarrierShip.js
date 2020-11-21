import Phaser from 'phaser';
import { Entity } from './Entities';

export class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'starshipdark', 'CarrierShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.angle -= 180;
    this.play('starshipdark');
    this.setData('score', 100);
  }
}