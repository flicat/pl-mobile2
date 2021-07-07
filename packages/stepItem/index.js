import StepItem from '../steps/step-item.vue';

/* istanbul ignore next */
StepItem.install = function (App) {
  App.component(StepItem.name, StepItem);
};

export default StepItem;
