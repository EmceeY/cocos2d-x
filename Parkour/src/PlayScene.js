var PlayScene = cc.Scene.extend({
  space:null,
  initPhysics:function(){
    this.space = new cp.Space();
    this.space.gravity = cp.v(0, -350);

    var wallBottom = new cp.SegmentShape(this.space.staticBody,
      cp.v(0, g_groundHeight),
      cp.v(4294967295, g_groundHeight),
      0);
    this.space.addStaticShape(wallBottom);
  },
  onEnter:function(){
    this._super();
    this.initPhysics();

    this.addChild(new BackgroundLayer());
    this.addChild(new AnimationLayer());
    this.addChild(new StatusLayer());

    this.scheduledUpdate();
  },
  update:function(dt){
    this.space.step(dt);
  }
});
