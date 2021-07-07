import List from './index.vue';

/* istanbul ignore next */
List.install = function (App) {
  App.component(List.name, List);
};

export default List;
