import type { Drawable } from '../canvas-animation';
import type Vector2 from './vector-2';

export default class Point implements Drawable {
  static total: number = 0;
  i: number;
  x: number;
  y: number;
  thickness: number;
  color: string;
  velocity: Vector2;

  ctx: CanvasRenderingContext2D;
  links: Point[] = [];

  constructor(
    x: number,
    y: number,
    thickness: number,
    color: string,
    velocity: Vector2,
    ctx: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.thickness = thickness;
    this.color = color;
    this.velocity = velocity;
    this.ctx = ctx;
    this.i = Point.total;

    Point.total++;
  }

  position(newX: number, newY: number) {
    this.x = newX;
    this.y = newY;
  }

  drawLine(to: Point, color = '#fff') {
    if (to.links.includes(this) || this.links.includes(to)) return;

    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(to.x, to.y);
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

  draw(deltaTime: number): void {
    this.ctx.save();

    this.ctx.fillStyle = `rgb(${this.color})`;

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.thickness, 0, Math.PI * 2);
    this.ctx.closePath();

    this.ctx.fill();

    this.ctx.restore();
  }
}
