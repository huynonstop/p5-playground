import p5, { Vector } from 'p5';

export class BounceBall {
  location: Vector;
  velocity: Vector;
  p: p5;
  radius: number;
  constructor(p: p5, radius: number) {
    this.location = p.createVector(0, 0);
    this.velocity = p.createVector(p.random(-15, 15), p.random(-15, 15));
    this.p = p;
    this.radius = radius;
  }

  setLocation() {
    this.location.set(this.p.width >> 1, this.p.height >> 1);
  }

  move() {
    this.location.add(this.velocity);
  }

  bounce() {
    if (this.location.x < 0 || this.location.x >= this.p.width) {
      this.velocity.x *= -1;
    }
    if (this.location.y < 0 || this.location.y >= this.p.height) {
      this.velocity.y *= -1;
    }
  }
  bounceRadius() {
    if (
      this.location.x < this.radius ||
      this.location.x >= this.p.width - this.radius
    ) {
      this.velocity.x *= -1;
    }
    if (
      this.location.y < this.radius ||
      this.location.y >= this.p.height - this.radius
    ) {
      this.velocity.y *= -1;
    }
  }

  display() {
    this.p.stroke('brown');
    this.p.fill('orange');
    this.p.circle(this.location.x, this.location.y, this.radius * 2);
  }
}
