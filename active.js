/**
 * 1. h5新特性,监听任何App自带返回键
 * 2. 无论是切换页面，或者是是取焦点，都会调用此监听函数
 * 3. 只限于页面的激活和非激活，例如react组件无效（未测试）
 */
var hiddenProperty = 'hidden' in document ? 'hidden' :
  'webkitHidden' in document ? 'webkitHidden' :
  'mozHidden' in document ? 'mozHidden' :
  null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function() {
  if (document[hiddenProperty]) {
    console.log('页面非激活');
  } else {
    console.log('页面激活');
  }
}

document.addEventListener(visibilityChangeEvent, onVisibilityChange);
