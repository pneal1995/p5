// THIS FILE HOLDS ALL:         //
//          ASSETS            //
// ANIMATIONS, SPRITES, SOUNDS //
function Square(xx, yy) {
    this.color = color(100, 200, 54, 76);
    this.ww = 50;
    this.hh = 75
    this.xx = 50;
    this.yy = yy;

    this.Draw = function() {
    fill(this.color);
    noStroke(); // no black line following object
    rect(this.xx, this.yy, this.ww, this.hh);
    }
}
// function Goomba(xx, yy) {
//     this.
// }