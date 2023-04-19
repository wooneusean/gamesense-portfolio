export default class Vector2 {
  x: number;
  y: number;

  static distanceTo(from: Vector2, to: Vector2) {
    if (from == null || to == null) throw new ReferenceError('from or to value is null.');
    return Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  }
}
