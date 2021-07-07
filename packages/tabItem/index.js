import TabItem from '../tabs/tab-item.vue';

/* istanbul ignore next */
TabItem.install = function (App) {
  App.component(TabItem.name, TabItem);
};

export default TabItem;
