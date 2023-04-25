import type { Drawable } from '../canvas-animation';
import type Vector2 from './vector-2';

export default class Point implements Drawable {
  static total: number = 0;
  i: number;
  thickness: number;
  velocity: Vector2;
  location: Vector2;

  ctx: CanvasRenderingContext2D;
  links: Point[] = [];

  constructor(location: Vector2, thickness: number, velocity: Vector2, ctx: CanvasRenderingContext2D) {
    this.location = location;
    this.thickness = thickness;
    this.velocity = velocity;
    this.ctx = ctx;
    this.i = Point.total;

    Point.total++;
  }

  position(newPos: Vector2) {
    this.location = newPos;
  }

  drawLine(to: Point, color = '#fff') {
    if (to.links.includes(this) || this.links.includes(to)) return;

    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.location.x, this.location.y);
    this.ctx.lineTo(to.location.x, to.location.y);
    this.ctx.stroke();
    this.ctx.restore();

    this.links.push(to);
    to.links.push(this);
  }

  static drawLine(from: Vector2, to: Vector2, ctx: CanvasRenderingContext2D, color = '#fff') {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    ctx.restore();
  }

  clearLinks() {
    this.links.length = 0;
  }

  getColor() {
    let h = (this.location.x / this.ctx.canvas.width) * 360;

    return `${h}, 100%, 50%`;
  }

  draw(deltaTime: number): void {
    this.ctx.save();

    this.ctx.fillStyle = `hsl(${this.getColor()})`;

    this.ctx.beginPath();
    this.ctx.arc(this.location.x, this.location.y, this.thickness, 0, Math.PI * 2);
    this.ctx.closePath();

    this.ctx.fill();

    this.ctx.restore();
  }
}
