import SwipeItem from '../swipe/swipe-item.vue';

/* istanbul ignore next */
SwipeItem.install = function (App) {
  App.component(SwipeItem.name, SwipeItem);
};

export default SwipeItem;
