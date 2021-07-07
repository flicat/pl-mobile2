import Form from './index.vue';

/* istanbul ignore next */
Form.install = function (App) {
  App.component(Form.name, Form);
};

export default Form;
