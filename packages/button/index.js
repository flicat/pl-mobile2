import Button from './index.vue';

/* istanbul ignore next */
Button.install = function (App) {
  App.component(Button.name, Button);
};

export default Button;
