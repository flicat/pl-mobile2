import Progress from './index.vue';

/* istanbul ignore next */
Progress.install = function (App) {
  App.component(Progress.name, Progress);
};

export default Progress;
