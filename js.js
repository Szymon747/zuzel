console.log("ooo")
var klikniete = "";
var kliked = false
class motor {
    constructor(x, y, color, way) {
        this.way = way;
        this.x = x;
        this.y = y;




        document.onkeydown = (e) =>{
                if (e.key=="ArrowLeft") {
                    this.way = (this.way + 5)%360
                    console.log(this.way)
                }
                if (e.key=="ArrowRight") {
                    this.way = (this.way - 5)%360
                    console.log(this.way)
                }

                console.log(stuser)
                kliked = false
            }

    }
}
let stuser = new motor(400, 370, "#dddddd", 0)



function kDown(e) {
    klikniete = e.which
    kliked = true;
}
function kUp(e) {
    kliked = false;
}

setInterval(function () {

    stuser.x=stuser.x+Math.cos(stuser.way*Math.PI/180);
    stuser.y=stuser.y+Math.sin(stuser.way*Math.PI/180);


    var c = document.getElementById("myCanvas");

    var borders = c.getContext("2d");
    borders.beginPath();
    borders.arc(200, 200, 200, 0.5 * Math.PI, 1.5 * Math.PI);
    borders.arc(600, 200, 200, 1.5 * Math.PI, 0.5 * Math.PI);
    borders.closePath();
    borders.stroke();
    borders.fillStyle = "green";
    borders.fill()


    var bordersin = c.getContext("2d");
    bordersin.beginPath();
    bordersin.arc(200, 200, 100, 0.5 * Math.PI, 1.5 * Math.PI);
    bordersin.arc(600, 200, 100, 1.5 * Math.PI, 0.5 * Math.PI);
    bordersin.closePath();
    bordersin.stroke();
    bordersin.fillStyle = "#ffffff";
    bordersin.fill()

    var player = c.getContext("2d");
    player.beginPath();
    player.arc(stuser.x, stuser.y, 5, 0, 10 * Math.PI);
    player.strokeStyle = "blue";
    player.fillStyle = "blue"
    player.fill()
    player.stroke();

}, 10);

