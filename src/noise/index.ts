import p5 from 'p5';

export const noiseSketch = (p: p5) => {
  const WIDTH = 720;
  const HEIGHT = 720;
  let t = 0;
  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    canvas.id('p5');
    p.background('white');
    p.rect(0, 0, WIDTH, HEIGHT);
  };
  p.draw = () => {
    p.stroke(0, 255);
    p.strokeWeight(1);
    t += 0.01;
    const x = p.noise(t) * HEIGHT;
    p.fill(0, 30);
    p.stroke(0, 30);
    p.circle((t % HEIGHT) * 10, x, 10);
  };
};
