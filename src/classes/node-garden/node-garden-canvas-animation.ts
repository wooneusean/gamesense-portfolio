import { CanvasAnimation } from '../canvas-animation';
import Point from './point';
import Vector2 from './vector-2';

const modulo = (x: number, N: number) => {
  return ((x % N) + N) % N;
};

export default class NodeGardenCanvasAnimation extends CanvasAnimation {
  nodeCount = 40;
  maxInteractionDistance = 200;
  horizontalSpeed = 150;
  verticalSpeed = 150;

  private points: Point[] = [];
  private mousePosition: Vector2;

  updateMousePosition(ev: MouseEvent) {
    this.mousePosition = { x: ev.x, y: ev.y };
  }

  populatePoints() {
    for (let i = this.points.length; i < this.nodeCount; i++) {
      const location: Vector2 = { x: Math.random() * this.canvas.width, y: Math.random() * this.canvas.height };
      this.points.push(new Point(location, 2, { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 }, this.ctx));
    }
  }

  start(): void {
    this.populatePoints();

    super.start();
  }

  stop(): void {
    super.stop();
  }

  update(deltaTime: number): void {
    if (this.points.length > this.nodeCount) {
      this.points.length = this.nodeCount;
    }

    if (this.points.length < this.nodeCount) {
      this.populatePoints();
    }

    this.points.forEach((point) => {
      point.position({
        x: modulo(point.location.x + this.horizontalSpeed * deltaTime * point.velocity.x, this.canvas.width),
        y: modulo(point.location.y + this.verticalSpeed * deltaTime * point.velocity.y, this.canvas.height),
      });
    });
  }

  draw(deltaTime: number): void {
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].draw(deltaTime);

      // draw lines to mouse position if close enough
      if (this.mousePosition) {
        let distToMouse = Vector2.distanceTo(this.points[i].location, this.mousePosition);
        if (distToMouse < this.maxInteractionDistance) {
          Point.drawLine(
            this.points[i].location,
            this.mousePosition,
            this.ctx,
            `hsla(${this.points[i].getColor()}, ${1 - distToMouse / this.maxInteractionDistance})`
          );
        }
      }

      // draw lines to other nodes
      for (let j = 0; j < this.points.length; j++) {
        if (i == j) continue;

        const dist = Vector2.distanceTo(this.points[i].location, this.points[j].location);
        if (dist > this.maxInteractionDistance) continue;

        this.points[i].drawLine(
          this.points[j],
          `hsla(${this.points[i].getColor()}, ${1 - dist / this.maxInteractionDistance})`
        );
      }
    }

    this.points.forEach((pt) => pt.clearLinks());
  }
}
