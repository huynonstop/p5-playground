import p5 from 'p5';
export type Sketch = (p: p5) => void;
export const bootstrap = (parentId: string = 'app', sketch: Sketch) => {
  const parentEl = document.getElementById(parentId);
  if (!parentEl) return;
  new p5(sketch, parentEl);
};
