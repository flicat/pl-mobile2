import GoTopButton from './index.vue';

/* istanbul ignore next */
GoTopButton.install = function (App) {
  App.component(GoTopButton.name, GoTopButton);
};

export default GoTopButton;
