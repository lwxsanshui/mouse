var WebGL = laya.webgl.WebGL;

var LayaSample = window.LayaSample || (window.LayaSample = {});
Laya.init(800, 600, WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
Laya.stage.bgColor = '#ffcccc';
Laya.loader.load('res/atlas/comp.atlas',Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS);
function onLoaded(){
    // var game = new Game();
    // Laya.stage.addChild(game);
    LayaSample.gameStart = new GameStart();
    Laya.stage.addChild(LayaSample.gameStart);
}


// (function(LayaSample){
//     (function(){
//         Laya.init(800, 600,laya.webgl.WebGL);
//         Laya.stage.bgColor = '#ffcccc';
//         Laya.loader.load('res/atlas/comp.atlas',Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS);
//     })
//     function onLoader(){
//         LayaSample.gameStart = new GameStart();
//         Laya.stage.addChild(LayaSample.gameStart);

//         // var game = new Game();
//         // Laya.stage.addChild(game);
//     }
// })(window.LayaSample || (window.LayaSample = {}));
