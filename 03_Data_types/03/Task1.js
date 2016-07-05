/**
 * Created by subs on 16.06.22.
 */
/*
 Objects

 1. Write functions for working with shapes in standard Planar coordinate system
 * Points are represented by coordinates `P(X, Y)`
 * Lines are represented by two points, marking their beginning and ending: `L(P1(X1,Y1)`, `P2(X2,Y2))`
 * Calculate the distance between two points
 * Check if three segment lines can form a triangle

 */

function Point(x, y) {
    if (x != undefined && y != undefined) {
        this.x = x;
        this.y = y;
    } else
        return undefined;
}

function Lines(p1, p2) {
    if (p1 != undefined && p2 != undefined) {
        this.p1 = p1;
        this.p2 = p2;
    } else
        return undefined;
}

function Triangle(l1, l2, l3) {
    if (l1 != undefined && l2 != undefined && l3 != undefined) {
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    } else
        return undefined;
}


Lines.prototype.lengthLine = function () {
    return Math.sqrt(Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2));

}

Triangle.prototype.isTriangle = function () {
    if ((this.l1.lengthLine() + this.l2.lengthLine()) < this.l3.lengthLine() &&
        (this.l2.lengthLine() + this.l3.lengthLine()) < this.l1.lengthLine() &&
        (this.l1.lengthLine() + this.l3.lengthLine()) < this.l2.lengthLine())
        return true;
    else return false;
}

var p1 = new Point(1, 2),
    p2 = new Point(2, 5),
    p3 = new Point(0, 7),
    p4 = new Point(8, 1),
    p5 = new Point(4, 9),
    p6 = new Point(6, 3),
    l1 = new Lines(p1, p2),
    l2 = new Lines(p3, p4),
    l3 = new Lines(p5, p6),
    triangle = new Triangle(l1, l2, l3);
console.log('l1=' + l1.lengthLine() + ' ' + 'l2=' + l2.lengthLine() + ' ' + 'l3=' + l3.lengthLine());
console.log('Is triangle = ' + triangle.isTriangle());
