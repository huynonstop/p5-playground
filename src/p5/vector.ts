import { Sketch } from '.';

export const vectorSketch: Sketch = (p) => {
  const WIDTH = 720;
  const HEIGHT = 720;
  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    canvas.id('p5');
    p.background('white');
    p.rect(0, 0, WIDTH, HEIGHT);
  };
  p.draw = () => {
    p.strokeWeight(1);
    p.stroke('black');
    p.background('white');

    p.rect(0, 0, WIDTH, HEIGHT);
    p.strokeWeight(5);

    const subMouseV = p.createVector(p.mouseX, p.mouseY);
    const addMouseV = p.createVector(p.mouseX, p.mouseY);
    p.stroke('red');
    p.line(0, 0, subMouseV.x, subMouseV.y);
    const centerV = p.createVector(WIDTH >> 1, HEIGHT >> 1);
    p.stroke('green');
    p.line(0, 0, centerV.x, centerV.y);
    // mouseV.add(centerV);
    // p.stroke('black');
    // p.line(0, 0, mouseV.x, mouseV.y);
    addMouseV.add(centerV);
    subMouseV.sub(centerV);
    p.stroke('black');
    p.line(0, 0, subMouseV.x, subMouseV.y);
    p.stroke('orange');
    p.line(0, 0, addMouseV.x, addMouseV.y);
    p.translate(WIDTH >> 1, HEIGHT >> 1);
    p.stroke('black');
    p.line(0, 0, subMouseV.x, subMouseV.y);
  };
};
