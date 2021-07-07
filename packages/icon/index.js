import Icon from './index.vue';

/* istanbul ignore next */
Icon.install = function (App) {
  App.component(Icon.name, Icon);
};

export default Icon;
