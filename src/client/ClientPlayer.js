import ClientGameObject from './ClientGameObject';

class ClientPlayer extends ClientGameObject {
  constructor(cfg) {
    super(cfg);

    this.playerName = cfg.playerName;

    const map = cfg.cell.world;
    map.game.setPlayer(this);
  }

  render(time) {
    super.render(time);

    const { map } = this;

    map.engine.renderSign({
      x: this.x + map.cellWidth / 2,
      y: this.y - 15,
      minWidth: map.cellWidth,
      maxWidth: map.cellWidth + 1.5,
      text: this.playerName,
    });
  }
}

export default ClientPlayer;
