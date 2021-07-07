import Collapse from './index.vue';

/* istanbul ignore next */
Collapse.install = function (App) {
  App.component(Collapse.name, Collapse);
};

export default Collapse;
