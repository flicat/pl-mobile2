import Canvas from './index.vue';

/* istanbul ignore next */
Canvas.install = function (App) {
  App.component(Canvas.name, Canvas);
};

export default Canvas;
