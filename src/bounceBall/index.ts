import { Sketch } from '../p5';
import { BounceBall } from './BounceBall';

export const bounceSketch: Sketch = (p) => {
  const WIDTH = 720;
  const HEIGHT = 720;
  const bounceBall = new BounceBall(p, 30);
  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    bounceBall.setLocation();
    canvas.id('p5');
  };
  p.draw = () => {
    p.strokeWeight(1);
    p.stroke('black');
    p.background('white');
    p.noFill();
    p.rect(0, 0, WIDTH, HEIGHT);
    bounceBall.move();
    bounceBall.bounceRadius();
    bounceBall.display();
  };
};
