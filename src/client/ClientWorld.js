import ClientCell from './ClientCell';
import PositionedObject from '../common/PositionedObject';

class ClientWorld extends PositionedObject {
  constructor(game, engine, levelCfg) {
    super();

    const worldHeight = levelCfg.map.length;
    const worldWidth = levelCfg.map[0].length;
    const cellSize = engine.canvas.height / levelCfg.camera.height;

    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: worldHeight * cellSize,
      width: worldWidth * cellSize,
      worldHeight,
      worldWidth,
      cellWidth: cellSize,
      cellHeight: cellSize,
      world: [],
    });
    //    console.log(this);
  }

  init() {
    //        console.log('MAP INIT');
    const { levelCfg, world, worldWidth, worldHeight } = this;

    for (let row = 0; row < worldHeight; row++) {
      for (let col = 0; col < worldWidth; col++) {
        if (!world[row]) {
          world[row] = [];
        }

        world[row][col] = new ClientCell({
          world: this,
          cellCol: col,
          cellRow: row,
          cellCfg: levelCfg.map[row][col],
        });
      }
    }
  }

  render(time) {
    const { levelCfg, world, worldWidth, worldHeight } = this;

    for (let layerId = 0; layerId < levelCfg.layers.length; layerId++) {
      for (let row = 0; row < worldHeight; row++) {
        for (let col = 0; col < worldWidth; col++) {
          world[row][col].render(time, layerId);
        }
      }
    }
  }

  cellAt(col, row) {
    return this.world[row] && this.world[row][col];
  }
}

export default ClientWorld;
