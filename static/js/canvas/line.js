class Line {
    constructor(ctx, x1, y1, x2, y2, color = "black") {
        this.beginX = x1;
        this.beginY = y1;
        this.endX = x2;
        this.endY = y2;

        this.color = color;

        this.draw(ctx)
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.moveTo(this.beginX, this.beginY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }
}

export default Line;