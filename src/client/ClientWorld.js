class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });
    //    console.log(this);
  }

  init() {
    //        console.log('MAP INIT');
    this.levelCfg.map.forEach((cfgRow, y) => {
      cfgRow.forEach((cfgCell, x) => {
        //                console.log(cfgCell);
        //                console.log('terrain', this.engine.sprites);
        this.engine.renderSpriteFrame({
          sprite: ['terrain', cfgCell[0]],
          frame: 0,
          x: x * this.levelCfg.camera.width,
          y: y * this.levelCfg.camera.height,
          w: this.levelCfg.camera.width,
          h: this.levelCfg.camera.height,
        });
      });
    });
    //        this.engine.renderSpriteFrame({
    //            sprite: ['terrain', 'grass'],
    //            frame: 0,
    //            x: 0,
    //            y: 0,
    //            w: 48,
    //            h: 48,
    //        });
  }
}

export default ClientWorld;
