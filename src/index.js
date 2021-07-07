/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */

import Loading from '../packages/loading'
import Alert from '../packages/alert'
import Confirm from '../packages/confirm'
import Toast from '../packages/toast'
import Button from '../packages/button'
import Canvas from '../packages/canvas'
import Cell from '../packages/cell'
import Checkbox from '../packages/checkbox'
import Collapse from '../packages/collapse'
import Datetime from '../packages/datetime'
import Fetch from '../packages/fetch'
import Form from '../packages/form'
import GoTopButton from '../packages/goTopButton'
import Icon from '../packages/icon'
import Input from '../packages/input'
import List from '../packages/list'
import Picker from '../packages/picker'
import Popup from '../packages/popup'
import Progress from '../packages/progress'
import Radio from '../packages/radio'
import Range from '../packages/range'
import Select from '../packages/select'
import StepItem from '../packages/stepItem'
import Steps from '../packages/steps'
import SwipeItem from '../packages/swipeItem'
import Swipe from '../packages/swipe'
import TabItem from '../packages/tabItem'
import Tabs from '../packages/tabs'
import Upload from '../packages/upload'
import './assets/less/variables.less'

function install(App) {
  [
    Button,
    Canvas,
    Cell,
    Checkbox,
    Collapse,
    Form,
    GoTopButton,
    Icon,
    Input,
    List,
    Picker,
    Popup,
    Progress,
    Radio,
    Range,
    Select,
    StepItem,
    Steps,
    SwipeItem,
    Swipe,
    TabItem,
    Tabs,
    Upload
  ].forEach(component => {
    App.component(component.name, component);
  });

  App.use(Loading);
  App.use(Fetch);
  App.use(Alert);
  App.use(Confirm);
  App.use(Toast);
  App.use(Datetime);
}

// TODO 添加开关 Switch
export default {
  version: '1.0.0',
  install,
  Button,
  Canvas,
  Cell,
  Checkbox,
  Collapse,
  Datetime,
  Fetch,
  Form,
  GoTopButton,
  Icon,
  Input,
  List,
  Picker,
  Popup,
  Progress,
  Radio,
  Range,
  Select,
  StepItem,
  Steps,
  SwipeItem,
  Swipe,
  TabItem,
  Tabs,
  Upload,
  Loading,
  Alert,
  Confirm,
  Toast
};
