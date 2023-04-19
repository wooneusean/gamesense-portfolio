/**
 * Base class for canvas-based animations.
 *
 * To use, please extend and override
 * {@link start}, {@link update} or {@link draw}
 */
export class CanvasAnimation implements Drawable, Updatable {
  frame: number;
  ctx: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  private previousTimestamp: number = 0;

  /**
   * Constructor for the CanvasAnimation class.
   *
   * @param canvas Canvas to draw the animation on.
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  /**
   * Starts the animation.
   *
   * When overriding, make sure to call `super.start()` at the end of the function.
   */
  start(): void {
    this.frame = requestAnimationFrame(this.loop.bind(this));
  }

  /**
   * Stops the animation.
   *
   * When overriding, make sure to call `super.stop()` at the start of the function.
   */
  stop(): void {
    cancelAnimationFrame(this.frame);
  }

  /**
   * Main loop of the animation which calls {@link update} followed by {@link draw}.
   * @param t time passed in by `requestAnimationFrame`
   */
  private loop(t: number): void {
    const deltaTime = (t - this.previousTimestamp) / 1000;
    this.previousTimestamp = t;

    this.frame = requestAnimationFrame(this.loop.bind(this));
    this.update(deltaTime);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.draw(deltaTime);
  }

  /**
   * Update call for animation. This is where you should
   * put the code to update values, transformations, etc.
   * @param deltaTime time difference between the previous and current frame.
   */
  update(deltaTime: number): void {}

  /**
   * Draw call for animation. This is where you should
   * put the code to draw shapes and whatnot.
   * @param deltaTime time difference between the previous and current frame.
   */
  draw(deltaTime: number): void {}
}

export interface Drawable {
  draw(deltaTime: number): void;
}

export interface Updatable {
  update(deltaTime: number): void;
}
