import Picker from './index.vue';

/* istanbul ignore next */
Picker.install = function (App) {
  App.component(Picker.name, Picker);
};

export default Picker;
