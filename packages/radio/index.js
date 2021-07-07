import Radio from './index.vue';

/* istanbul ignore next */
Radio.install = function (App) {
  App.component(Radio.name, Radio);
};

export default Radio;
