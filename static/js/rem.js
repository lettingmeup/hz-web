(function(designWidth, maxWidth) {//designWidth为设计稿宽度，maxWidth为想要支持的最大屏幕宽度（超过设定的最大屏幕宽度按最大屏幕宽度计算）
  var doc = document,
    win = window,
    docEl = doc.documentElement,
    remStyle = document.createElement("style"),
    tid;

  function refreshRem() {
    var width = docEl.getBoundingClientRect().width;//当前设备宽度
    maxWidth = maxWidth || 540;
    width>maxWidth && (width=maxWidth);
    var rem = parseInt(width * 10 / designWidth);
    remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    var wrap = doc.createElement("div");
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem();

  win.addEventListener("resize", function() {
    clearTimeout(tid); //防止执行两次
    tid = setTimeout(refreshRem, 300);
  }, false);

  win.addEventListener("pageshow", function(e) {
    if (e.persisted) { // 浏览器后退的时候重新计算
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "16px";
  } else {
    doc.addEventListener("DOMContentLoaded", function(e) {
      doc.body.style.fontSize = "16px";
    }, false);
  }
})(375, 9999);//(设计稿宽度，支持的最大屏幕宽度)，一般设计稿宽度为750px，为了方便计算，这里写75
             // 这样就可以达到：设计稿中量出的宽度/100 就是实际rem单位的效果
             // 例如设计稿中某元素宽度200px，除以100等于2，css中可直接写2rem
