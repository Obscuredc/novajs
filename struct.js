var fps = 50;
function onstartWorker () {
  var e = setInterval(update, 1000 / fps);
}
window.addEventListener('load',
  function() {
    console.log('novajs installed');
    onstart();
  }, false);
  /** 
        Citation for window.addEventli...
        https://stackoverflow.com/questions/20180251/when-to-use-window-onload 
  **/
