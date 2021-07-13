/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */

import loading from '../packages/loading'
import alert from '../packages/alert'
import confirm from '../packages/confirm'
import toast from '../packages/toast'
import button from '../packages/button'
import canvas from '../packages/canvas'
import cell from '../packages/cell'
import checkbox from '../packages/checkbox'
import collapse from '../packages/collapse'
import datetime from '../packages/datetime'
import fetch from '../packages/fetch'
import form from '../packages/form'
import goTopButton from '../packages/goTopButton'
import icon from '../packages/icon'
import input from '../packages/input'
import list from '../packages/list'
import picker from '../packages/picker'
import popup from '../packages/popup'
import progress from '../packages/progress'
import radio from '../packages/radio'
import range from '../packages/range'
import select from '../packages/select'
import stepItem from '../packages/stepItem'
import steps from '../packages/steps'
import swipeItem from '../packages/swipeItem'
import swipe from '../packages/swipe'
import tabItem from '../packages/tabItem'
import tabs from '../packages/tabs'
import upload from '../packages/upload'
import './assets/less/variables.less'

function install(App) {
  [
    button,
    canvas,
    cell,
    checkbox,
    collapse,
    form,
    goTopButton,
    icon,
    input,
    list,
    picker,
    popup,
    progress,
    radio,
    range,
    select,
    stepItem,
    steps,
    swipeItem,
    swipe,
    tabItem,
    tabs,
    upload
  ].forEach(component => {
    App.component(component.name, component);
  });

  App.use(loading);
  App.use(alert);
  App.use(confirm);
  App.use(toast);
  App.use(datetime);
  App.use(fetch);
}

export {
  loading,
  alert,
  confirm,
  toast,
  button,
  canvas,
  cell,
  checkbox,
  collapse,
  datetime,
  fetch,
  form,
  goTopButton,
  icon,
  input,
  list,
  picker,
  popup,
  progress,
  radio,
  range,
  select,
  stepItem,
  steps,
  swipeItem,
  swipe,
  tabItem,
  tabs,
  upload
}

export default {
  version: '1.0.0',
  install,
  loading,
  alert,
  confirm,
  toast,
  button,
  canvas,
  cell,
  checkbox,
  collapse,
  datetime,
  fetch,
  form,
  goTopButton,
  icon,
  input,
  list,
  picker,
  popup,
  progress,
  radio,
  range,
  select,
  stepItem,
  steps,
  swipeItem,
  swipe,
  tabItem,
  tabs,
  upload
};
