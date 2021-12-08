import p5 from 'p5';
import { sketch } from './noise';

export const bootstrap = (parentId: string = 'app') => {
  const parentEl = document.getElementById(parentId);
  if (!parentEl) return;
  new p5(sketch, parentEl);
};
