console.log(document.cookie);

var totalPixels = "";
var gridno = 0;
var ctx;
var rand;

const grid1 = {
    1: [2, 3, 4, 80, 81],
    2: [5, 6, 7, 50, 51],
    3: [8, 9, 10, 52, 53],
    4: [11, 12, 13, 54, 55],
    5: [14, 15, 16, 56, 57],
    6: [17, 18, 19, 58, 59],
    7: [20, 21, 22, 60, 61],
    8: [23, 24, 25, 62, 63],
    9: [26, 27, 28, 64, 65],
    10: [29, 30, 31, 66, 67],
    11: [32, 33, 34, 68, 69],
    12: [35, 36, 37, 70, 71],
    13: [38, 39, 40, 72, 73],
    14: [41, 42, 43, 74, 75],
    15: [44, 45, 46, 76, 77],
    16: [47, 48, 49, 78, 79]
};

$(document).ready(function () {
    image.src = "http://localhost:3001/public/Images/image1.jpg";
    setInterval(function () {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        image = document.getElementById("image");

        ctx.drawImage(image, 0, 0, 400, 400);
    }, 3001);
    image.crossOrigin = "Anonymous";
    var addr = 1;

    $("#next").click(function () {
        rand = Math.floor(Math.random() * (4 - 0 + 1) + 0)
        changeImage(image, canvas, ctx, rand);
    })

    let canvasElem = document.querySelector("canvas");

    canvasElem.addEventListener("mousedown", function (e) {
        const coords = getMousePosition(canvasElem, e);
        var x = coords[0];
        var y = coords[1];
        const arrr = processImage(ctx, x, y);
        totalPixels += arrr[1];
        if (addr == 1) {
            gridno = arrr[0];
        }

        addr++;
        if (addr >= 5) {
            ctx.clearRect(0, 0, 400, 400);
            const myBitArray = sjcl.hash.sha256.hash(document.getElementById("pass").value + totalPixels)
            const myHash = sjcl.codec.hex.fromBits(myBitArray)
            console.log(myHash);
            if (myHash === (document.cookie)) {
                // alert("Log in user");
                document.getElementById("heading").innerHTML = "Log in successful";
                console.log("Log in user");
            }
            else if (myHash != document.cookie) {
                alert("Log in failed");
                document.getElementById("heading").innerHTML = "Log in failed";
                console.log("Log in failed");
            }
        }

        if (addr >= 1 && addr < 5) {
            // console.log(gridno);
            rand = Math.floor(Math.random() * (4 - 0 + 1) + 0)
            // console.log(rand);
            // console.log("hgb");
            changeImage(image, canvas, ctx, rand);
        }

    });
});

function changeImage(image, canvas, ctx, rand) {

    console.log(grid1[gridno][rand]);
    image.src = "http://localhost:3001/public/Images/image" + grid1[gridno][rand].toString() + ".jpg";
    setInterval(function () {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        image = document.getElementById("image");

        ctx.drawImage(image, 0, 0, 400, 400);
    }, 3001);
}


function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    // console.log("Coordinate x: " + x,
    //     "Coordinate y: " + y);
    return [x, y];
}


function processImage(ctx, x, y) {
    var grid = 0;
    if (x <= 100 && y <= 100) {
        grid = 1;
        pixels = ctx.getImageData(0, 0, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x <= 100 && y > 100 && y <= 200) {
        grid = 2;
        pixels = ctx.getImageData(0, 100, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x <= 100 && y > 200 && y <= 300) {
        grid = 3;
        pixels = ctx.getImageData(0, 200, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x <= 100 && y > 300 && y <= 400) {
        grid = 4;
        pixels = ctx.getImageData(0, 300, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }

    else if (x > 100 && x <= 200 && y > 0 && y <= 100) {
        grid = 5;
        pixels = ctx.getImageData(100, 0, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 100 && x <= 200 && y > 100 && y <= 200) {
        grid = 6;
        pixels = ctx.getImageData(100, 100, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 100 && x <= 200 && y > 200 && y <= 300) {
        grid = 7;
        pixels = ctx.getImageData(100, 200, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 100 && x <= 200 && y > 300 && y <= 400) {
        grid = 8;
        pixels = ctx.getImageData(100, 300, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }

    else if (x > 200 && x <= 300 && y > 0 && y <= 100) {
        grid = 9;
        pixels = ctx.getImageData(200, 0, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 200 && x <= 300 && y > 100 && y <= 200) {
        grid = 10;
        pixels = ctx.getImageData(200, 100, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 200 && x <= 300 && y > 200 && y <= 300) {
        grid = 11;
        pixels = ctx.getImageData(200, 200, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 200 && x <= 300 && y > 300 && y <= 400) {
        grid = 12;
        pixels = ctx.getImageData(200, 300, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }

    else if (x > 300 && x <= 400 && y > 0 && y <= 100) {
        grid = 13;
        pixels = ctx.getImageData(300, 0, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 300 && x <= 400 && y > 100 && y <= 200) {
        grid = 14;
        pixels = ctx.getImageData(300, 100, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 300 && x <= 400 && y > 200 && y <= 300) {
        grid = 15;
        pixels = ctx.getImageData(300, 200, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else if (x > 300 && x <= 400 && y > 300 && y <= 400) {
        grid = 16;
        pixels = ctx.getImageData(300, 300, 1, 1);
        var con = pixels.data[0].toString();
        for (var i = 1; i < 4; i++) {
            con += pixels.data[i].toString();
        }
    }
    else {
        console.log("Nothing");
    }
    return [grid, con];
}

