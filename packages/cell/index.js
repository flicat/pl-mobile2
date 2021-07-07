import Cell from './index.vue';

/* istanbul ignore next */
Cell.install = function (App) {
  App.component(Cell.name, Cell);
};

export default Cell;
