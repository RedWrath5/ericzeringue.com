export interface iShape {
  draw(): void;
  x: number;
  y: number;
  color: string;
  lineWidth: number;
  ctx: CanvasRenderingContext2D;
}