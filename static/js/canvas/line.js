class Line {
    constructor(ctx, x1, y1, x2, y2) {
        this.beginX = x1;
        this.beginY = y1;
        this.endX = x2;
        this.endY = y2;

        this.draw(ctx)
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.moveTo(this.beginX, this.beginY);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }
}

export default Line;