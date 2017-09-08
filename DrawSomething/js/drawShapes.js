function asdf() {

    top('red', 'UI');
    middle('orange', 'API');
    bottom('green', 'UNIT');

    function top(color, text) {

        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.beginPath();

        ctx.moveTo(600, 0);
        ctx.lineTo(500, 100);
        ctx.lineTo(700, 100);
        ctx.lineTo(600, 0);

        ctx.lineCap = 'round';


        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();

        // Text
        var ctxText = canvas.getContext('2d');
        ctxText.fillStyle = 'black';
        ctxText.textAlign = 'center';
        ctxText.font = '22px serif';
        ctxText.fillText(text, 600, 70);

    }

    function middle(color, text) {
        var canvas = document.getElementById('myCanvas');
        var ctx2 = canvas.getContext('2d');

        ctx2.strokeStyle = 'black';
        ctx2.lineWidth = 3;
        ctx2.beginPath();

        ctx2.moveTo(500, 100);
        ctx2.lineTo(400, 200);
        ctx2.lineTo(800, 200);
        ctx2.lineTo(700, 100);
        ctx2.lineTo(500, 100);

        ctx2.lineCap = 'round';


        ctx2.fillStyle = color;
        ctx2.fill();
        ctx2.stroke();

        // Text
        var ctxText = canvas.getContext('2d');
        ctxText.fillStyle = 'black';
        ctxText.textAlign = 'center';
        ctxText.font = '22px serif';
        ctxText.fillText(text, 600, 160);
    }

    function bottom(color, text) {

        var canvas = document.getElementById('myCanvas');
        var ctx3 = canvas.getContext('2d');

        ctx3.strokeStyle = 'black';
        ctx3.lineWidth = 3;
        ctx3.beginPath();

        ctx3.moveTo(400, 200);
        ctx3.lineTo(300, 300);
        ctx3.lineTo(900, 300);
        ctx3.lineTo(800, 200);
        ctx3.lineTo(400, 200);

        ctx3.lineCap = 'round';


        ctx3.fillStyle = color;
        ctx3.fill();
        ctx3.stroke();

        // Text
        var ctxText = canvas.getContext('2d');
        ctxText.fillStyle = 'black';
        ctxText.textAlign = 'center';
        ctxText.font = '22px serif';
        ctxText.fillText(text, 600, 260);

    }
}
