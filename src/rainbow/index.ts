import p5 from 'p5';
import { euclidean, manhattan } from '../utils/distance';

export const rainbowSketch = (p: p5) => {
  const WIDTH = 720;
  const HEIGHT = 720;
  const AREA = WIDTH * HEIGHT;
  const step = 10;
  const centerX = WIDTH >> 1;
  const centerY = HEIGHT >> 1;
  const LOOP = (WIDTH + HEIGHT) >> 1;
  let cacheDistance: number[][];
  let loopT = 0;
  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    canvas.id('p5');
    p.background('white');
    p.rect(0, 0, WIDTH, HEIGHT);
    p.colorMode(p.HSB, 100);
    cacheDistance = [];
    for (let i = 0; i < WIDTH; i += step) {
      const temp = [];
      for (let j = 0; j < HEIGHT; j += step) {
        temp.push(euclidean(i, j, centerX, centerY));
      }
      cacheDistance.push(temp);
    }
  };
  for (let i = 0; i < WIDTH; i += step) {
    console.log();
  }
  p.draw = () => {
    loopT = (loopT + step) % LOOP;
    for (let i = 0; i < WIDTH; i += step) {
      for (let j = 0; j < HEIGHT; j += step) {
        p.noStroke();
        // circle
        p.fill(
          (((cacheDistance[i / step][j / step] + loopT) % LOOP) / LOOP) * 100,
          Math.sin((loopT / LOOP) * Math.PI) * 40 + 60, // 0.6 -> 1
          100,
        );
        // wave
        // p.fill(
        //   Math.sin((loopT / (LOOP >> 1)) * Math.PI + i / (WIDTH >> 2)) * 50 +
        //     50,
        //   100, // 0.6 -> 1
        //   100,
        // );
        p.rect(i, j, i + step, j + step);
      }
    }
  };
};
