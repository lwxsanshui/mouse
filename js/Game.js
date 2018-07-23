var Game = (function(_super){
    function Game(){

        this.moles = new Array;
        this.moleNum = 9;
        Game.super(this);
        //进度条
        this.timeBar.value = 1 ;
        //得分
        this.score = 0;
        this.hitCallBackHd = Laya.Handler.create(this,this.setScore,null,false);
        for(var i=0 ; i<this.moleNum ; i++){
            this.box = this.getChildByName('item'+i);
            this.mole = new Mole(this.box.getChildByName('normal'),this.box.getChildByName('hit'),21,this.hitCallBackHd,this.box.getChildByName('scoreImg'));
            this.moles.push(this.mole);
        }
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.visible = false;
        // this.hammer.start();
        // this.scoreNums.dataSource = {item0}
        // this.mole = new Mole(this.normal,this.hit,21);
        // this.mole.show();
        // Laya.timer.loop(1000,this,this.isShow);
    }
    Laya.class(Game,'Game',_super);
    var _proto = Game.prototype;
    _proto.isShow = function(){
        this.timeBar.value -=(1/8);
        if(this.timeBar.value <=0){
            this.gameOver();
            return;
        }
        this.index = Math.floor(Math.random()*this.moleNum);
        this.moles[this.index].show();
    };
    _proto.gameOver = function(){
        Laya.timer.clear(this,this.isShow);
        console.log('游戏结束');
        this.hammer.visible = false;
        this.hammer.end();
        if(!LayaSample.gameOver){
            LayaSample.gameOver = new GameOver();
        }
        LayaSample.gameOver.centerX = 0;
        LayaSample.gameOver.centerY = 40;
        LayaSample.gameOver.setScoreUI(this.score);
        Laya.stage.addChild(LayaSample.gameOver);
    };
    _proto.setScore = function(type){
        this.score += (type==1?-100:100);
        if(this.score <= 0)
        this.score = 0 ;
        this.updateScoreUI();
    };
    _proto.gameStart = function(){
        this.timeBar.value = 1;
        this.score = 0;
        this.updateScoreUI();
        this.hammer.visible = true;
        this.hammer.start();
        Laya.timer.loop(1000,this,this.isShow);
    }
    _proto.updateScoreUI = function(){
        this.data = {};
        this.temp = this.score;
        for(var i=9 ; i>=0 ; i--){
            this.data['item'+i] = {index:Math.floor(this.temp%10)};
            this.temp/=10;
        }
        this.scoreNums.dataSource = this.data;
    }
    // _proto.onLoop = function(){
    //     this.mole.show();
    // };
    return Game;
})(ui.GameUI)