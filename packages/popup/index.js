import Popup from './index.vue';

/* istanbul ignore next */
Popup.install = function (App) {
  App.component(Popup.name, Popup);
};

export default Popup;
