import MovableObject from '../common/MovableObject';

class ClientGameObject extends MovableObject {
  constructor(cfg) {
    super();

    const { x, y, width, height } = cfg.cell;

    const map = cfg.cell.world;
    const gameObjs = map.game.gameObjects;
    const objCfg = typeof cfg.objCfg === 'string' ? { type: cfg.objCfg } : cfg.objCfg;

    if (objCfg.player) {
      map.game.setPlayer(this);
    }

    Object.assign(
      this,
      {
        cfg,
        x,
        y,
        width,
        height,
        spriteCfg: gameObjs[objCfg.type],
        objectConfig: objCfg,
        type: objCfg.type,
        map,
      },
      cfg,
    );
  }

  moveByCellCoord(dcol, drow, conditionCallback = null) {
    const { cell } = this;
    this.moveToCellCoord(cell.cellCol + dcol, cell.cellRow + drow, conditionCallback);
  }

  moveToCellCoord(dcol, drow, conditionCallback = null) {
    const { map } = this;
    const newCell = map.cellAt(dcol, drow);

    if (!conditionCallback || conditionCallback(newCell)) this.setCell(newCell);
  }

  setCell(newCell) {
    if (newCell) {
      this.detouch();
      this.cell = newCell;
      newCell.addGameObject(this);

      const { x, y, width, height } = newCell;
      Object.assign(this, { x, y, width, height });
    }
  }

  render(time) {
    super.render(time);

    const { x, y, width, height, map } = this;
    const engineW = map.engine;

    const { sprite, frame, states } = this.spriteCfg;

    const spriteFrame = states ? states.main.frames[0] : frame;

    engineW.renderSpriteFrame({ sprite, frame: spriteFrame, x, y, w: width, h: height });
  }

  detouch() {
    if (this.cell) {
      this.cell.removeGameObject(this);
      this.cell = null;
    }
  }
}

export default ClientGameObject;
