import p5 from 'p5';
export type Sketch = (p: p5) => void;
export const bootstrap = (parentId: string = 'app', sketch: Sketch) => {
  const parentEl = document.getElementById(parentId);
  if (!parentEl) return;
  new p5(sketch, parentEl);
};

export const sketch = (p: p5) => {
  const WIDTH = 720;
  const HEIGHT = 720;
  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    canvas.id('p5');
    p.background('white');
    p.rect(0, 0, WIDTH, HEIGHT);
  };
  p.draw = () => {};
};
