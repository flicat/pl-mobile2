import Upload from './index.vue';

/* istanbul ignore next */
Upload.install = function (App) {
  App.component(Upload.name, Upload);
};

export default Upload;
