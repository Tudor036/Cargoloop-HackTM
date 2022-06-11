class Line {
    constructor(ctx, x1, y1, x2, y2) {
        this.beginX = x1;
        this.beginY = y1;
        this.endX = x2;
        this.endY = y2;

        this.draw(ctx)
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.beginX, this.beginY);
        context.lineTo(this.endX, this.endY);
        context.stroke();
    }
}

export default Line;