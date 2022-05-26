import { style } from './style';

document.addEventListener('DOMContentLoaded', () => {
  const progressBar1 = new ProgressBar();
  document.body.appendChild(progressBar1.element);

  const progressBar2 = new ProgressBar(4, 2);
  document.body.appendChild(progressBar2.element);

  const progressBar3 = new ProgressBar(100, 20, 200);
  document.body.appendChild(progressBar3.element);
});