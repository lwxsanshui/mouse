var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.timeBar=null;
		    this.scoreNums=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);

		}

		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":194,"x":158,"name":"item0"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-01.png"}},{"type":"Image","props":{"y":26,"x":68,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":190,"x":341,"name":"item1"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-02.png"}},{"type":"Image","props":{"y":28,"x":69,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":197,"x":538,"name":"item2"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-03.png"}},{"type":"Image","props":{"y":27,"x":70,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":283,"x":124,"name":"item3"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-04.png"}},{"type":"Image","props":{"y":28,"x":66,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":346,"name":"item4"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":29,"x":70,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":282,"x":542,"name":"item5"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":29,"x":64,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":380,"x":120,"name":"item6"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-07.png"}},{"type":"Image","props":{"y":25,"x":68,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":387,"x":344,"name":"item7"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":28,"x":67,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":388,"x":566,"name":"item8"},"child":[{"type":"Image","props":{"y":27,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":20,"x":5,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":2,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":27,"x":67,"skin":"comp/score_2.png","name":"scoreImg","anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":6,"x":8,"var":"timeBar","value":1,"skin":"comp/progress_time.png"},"child":[{"type":"Box","props":{"y":30,"x":24,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]}]};
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.restartBtn=null;
		    this.scoreNums=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);

		}

		GameOverUI.uiView={"type":"View","props":{"width":500,"height":400},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"comp/overBg.png","height":400,"sizeGrid":"15,9,19,10"}},{"type":"Image","props":{"y":6,"x":7,"skin":"comp/total Score.png"}},{"type":"Button","props":{"y":303,"x":154,"var":"restartBtn","stateNum":2,"skin":"comp/btn_restart.png"}},{"type":"Box","props":{"y":159,"x":165,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10,"autoPlay":false}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10,"autoPlay":false}}]}]};
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.startBtn=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);

		}

		GameStartUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":55,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":398,"x":287,"width":178,"var":"startBtn","stateNum":2,"skin":"comp/btn_start.png","height":76}}]};
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);

		}

		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":61,"x":62,"width":98,"var":"hammer","skin":"comp/hammer.png","pivotY":49,"pivotX":59,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":64,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":3},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":4},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);