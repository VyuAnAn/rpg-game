import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';
import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.world = this.createWorld();

    this.initEngine();
    //    console.log(this, this.engine);
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      //                console.log("this.engine", this.engine);
      this.world.init();
      this.engine.on('render', (_, time) => {
        this.world.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  getKeyHandlers(keydown, x, y) {
    if (keydown) {
      this.player.moveByCellCoord(x, y, (cell) => cell.findObjectsByType('grass').length);
    }
  }

  initKeys() {
    this.engine.input.onKey({ ArrowLeft: (keydown) => this.getKeyHandlers(keydown, -1, 0) });
    this.engine.input.onKey({ ArrowRight: (keydown) => this.getKeyHandlers(keydown, 1, 0) });
    this.engine.input.onKey({ ArrowUp: (keydown) => this.getKeyHandlers(keydown, 0, -1) });
    this.engine.input.onKey({ ArrowDown: (keydown) => this.getKeyHandlers(keydown, 0, 1) });
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      console.log('Game INIT');
    }
  }
}

export default ClientGame;
