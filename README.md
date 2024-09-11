## 移动端UI框架
基于Vue3的移动端UI框架

### 文档
[中文文档](https://flicat.github.io/pl-mobile2/)

### 安装
```
npm i pl-mobile2 --save
```

### 使用

#### 全局引入
```
import PlMobile2 from 'pl-mobile2'
Vue.use(PlMobile2)
```
#### 样式引入
```
import 'pl-mobile2/lib/style.css'
```

>- *样式文件需要单独引入*
>- *组件字体及尺寸基于 rem 计算*

#### 按需引入
```
<template>
  <pl-button type="default">按钮</pl-button>
</template>

<script>
import {button} from 'pl-mobile2'

export default {
  components: {
    'pl-button': button
  }
}
</script>
```

### 组件列表
>- [button](./docs/button.md)
>- [canvas](./docs/canvas.md)
>- [cell](./docs/cell.md)
>- [checkbox](./docs/checkbox.md)
>- [collapse](./docs/collapse.md)
>- [datetime](./docs/datetime.md)
>- [fetch](./docs/fetch.md)
>- [form](./docs/form.md)
>- [goTopButton](./docs/goTopButton.md)
>- [icon](./docs/icon.md)
>- [input](./docs/input.md)
>- [list](./docs/list.md)
>- [loading](./docs/loading.md)
>- [message](./docs/message.md)
>- [picker](./docs/picker.md)
>- [popup](./docs/popup.md)
>- [progress](./docs/progress.md)
>- [radio](./docs/radio.md)
>- [range](./docs/range.md)
>- [select](./docs/select.md)
>- [steps](./docs/steps.md)
>- [swipe](./docs/swipe.md)
>- [tabs](./docs/tabs.md)
>- [upload](./docs/upload.md)

### 所有组件
```
import {
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
} from 'pl-mobile2'
```

### css全局变量
```css
:root {
  /* global */
  --default: #BEC5CB;
  --primary: #5074FF;
  --success: #67c23a;
  --warning: #e6a23c;
  --danger: #f56c6c;

  --primary-light: #5074FF;
  --danger-light: #FA9191;

  --default-text: #1E3259;
  --info-text: #1D3456;
  --primary-text: #757575;
  --success-text: #3D7D11;
  --warning-text: #DE5E05;
  --error-text: #FF5555;

  --overtime: #FFE7E7;
  --progress: #CEF5CA;
  --not-started: #FFEAC7;
  --disabled: #E2E5F0;

  --tag-bg: #9898B6;
  --input-bg: #fff;

  --horizontal-size: 1.2rem;
  --asterisk-size: 0.6rem;

  /* message */
  --title-color: #333;
  --content-color: #666;
  --toast-text-color: #d6d6d6;

  /* button */
  --button-text-color: #fff;

  /* canvas */
  --canvas-bg: #ffffdc;
  --canvas-placeholder: #ccc;

  /* checkbox */
  --checkbox-disabled-text: #c8c9cc;
  --checkbox-disabled-border: #dcdfe6;
  --checkbox-disabled-bg: #ebedf0;
  --checkbox-text: #333;
  --checkbox-bg: #dcdfe6;
  --checkbox-toggle-color: #fff;
  --checkbox-toggle-unchecked-bg: #e6a23c;
  --checkbox-toggle-checked-bg: #67c23a;
  --checkbox-vertical-border: #f0f0f0;
  --checkbox-button-border: #dcdfe6;
  --checkbox-button-text: #fff;
  --checkbox-button-disabled-bg: #ebebe4;
  --checkbox-button-disabled-text: #999;

  /* datetime */
  --datetime-bg: #fff;
  --week-bg: #ededed;
  --datetime-disabled-text: #999;
  --datetime-current-text: #fff;
  --datetime-current-bg: #6db9e6;
  --datetime-active-bg: #e7faff;
  --datetime-button-top-border: #ededed;
  --datetime-cancel-button-color: #fff;
  --datetime-submit-button-color: #fff;
  --datetime-cancel-button-bg: #6db9e6;
  --datetime-submit-button-bg: #6db9e6;
  --watch-bg: #eee;
  --watch-result-color: #666;
  --watch-result-bg: #e7fbff;
  --watch-range-color: #fff5e7;
  --watch-button-color: #666;
  --watch-hour-pointer: #58d299;
  --watch-minute-pointer: #58d299;
  --watch-end-hour-pointer: #58bad2;
  --watch-end-minute-pointer: #58bad2;

  /* to-top */
  --to-top-text: #C1CEFF;

  /* list */
  --list-refresh-tip: #ccc;

  /* loading */
  --loading-text: #fff;
  --loading-bg: rgba(0, 0, 0, 0.5);

  /* picker */
  --picker-text: #333;
  --picker-bg: #fff;
  --picker-btn-cancle: #bec5cb;
  --picker-btn-submit: #3388FF;
  --picker-border: #ebedf0;

  /* progress */
  --progress-inner: #EBEDFB;
  --progress-bar: #3388FF;
  --progress-text: #333;

  /* radio */
  --radio-text: #333;
  --radio-disabled-text: #c8c9cc;
  --radio-button-text: #fff;
  --radio-button-border: #dcdfe6;
  --radio-button-disabled-text: #999;
  --radio-button-disabled-bg: #ebebe4;
  --radio-vertical-border: #f0f0f0;

  /* range */
  --range-bar: #EBEDFB;
  --range-progress: #5074FF;
  --range-thumb: #fff;
  --range-text: #999;
  --range-disabled-bg: #c0c2cc;

  /* select */
  --select-color: #fff;
  --select-popup-color: #333;
  --select-popup-bg: #fff;
  --select-popup-border: #ebedf0;

  /* steps */
  --steps-toggle-text: #9898B6;
  --steps-line: #F2F3F5;
  --steps-icon: #DCDEE0;
  --step-icon-size: 1.2rem;

  /* tab */
  --tab-card-border: #e4e7ed;
  --tab-card-disabled-bg: #f6f6f6;
  --tab-button-active-text: #fff;
  --tab-border: #EFF2F5;

  /* upload */
  --upload-del-text: #ccc;
  --upload-add-button: #EBEDFB;
}
```
