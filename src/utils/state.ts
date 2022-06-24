interface ICoordinates {
  x: number;
  y: number;
}

const state = {
  coordinate: { x: 0, y: 0 },
  get coordanates() {
    return this.coordinate;
  },

  set coordanates(value: ICoordinates) {
    const { x, y } = value;
    this.coordinate.x = x;
    this.coordinate.y = y;
  },
};
