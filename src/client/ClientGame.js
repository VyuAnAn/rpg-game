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
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId), this);
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  getWorld() {
    return this.world;
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.world.init();
      this.engine.on('render', (_, time) => {
        this.engine.camera.focusAtGameObject(this.player);
        this.world.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  getStateByValue(x, y) {
    const dirs = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1],
    };
    return Object.keys(dirs).find((key) => dirs[key][0] === x && dirs[key][1] === y);
  }

  getKeyHandlers(keydown, x, y) {
    if (keydown) {
      const { player } = this;

      if (player && player.motionProgress === 1) {
        const canMovie = player.moveByCellCoord(x, y, (cell) => cell.findObjectsByType('grass').length);

        if (canMovie) {
          player.setState(this.getStateByValue(x, y));
          player.once('motion-stopped', () => player.setState('main'));
        }
      }
    }
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => this.getKeyHandlers(keydown, -1, 0),
      ArrowRight: (keydown) => this.getKeyHandlers(keydown, 1, 0),
      ArrowUp: (keydown) => this.getKeyHandlers(keydown, 0, -1),
      ArrowDown: (keydown) => this.getKeyHandlers(keydown, 0, 1),
    });
  }

  //  movePlayerToDir(dir){
  //    const dirs = {
  //      left: [-1, 0],
  //      right: [1, 0],
  //      up: [0, -1],
  //      down: [0,1],
  //    };
  //
  //    const { player } = this;
  //
  //    if (player && player.motionProgress === 1) {
  //       const canMovie = player.moveByCellCoord(dirs[dir][0], dirs[dir][1], (cell) =>  {
  //           return cell.findObjectsByType('grass').length;
  //        });
  //
  //      if(canMovie){
  //          player.setState(dir);
  //          player.once('motion-stopped', () => player.setState('main'));
  //        }
  //    }
  //  }
  //
  //  initKeys() {
  //    this.engine.input.onKey({
  //      ArrowLeft: (keydown) => keydown && this.movePlayerToDir('left'),
  //      ArrowRight: (keydown) => keydown && this.movePlayerToDir('right'),
  //      ArrowUp: (keydown) => keydown && this.movePlayerToDir('up'),
  //      ArrowDown: (keydown) => keydown && this.movePlayerToDir('down'),
  //    });
  //  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      console.log('Game INIT');
    }
  }
}

export default ClientGame;
