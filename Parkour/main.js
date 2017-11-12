
cc.game.onStart = function(){
  cc.view.setDesignResolutionSize(480, 320, cc.ResolutionPolicy.SHOW_ALL);
  cc.view.resizeWithBrowserSize(true);
  cc.LoaderScene.preload(g_resources, function(){
    cc.director.runScene(new MenuScene());
  }, this);
};
cc.game.run();
