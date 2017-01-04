document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Loading now!!");
  var codeBlocks = Array.prototype.slice.call(document.getElementsByTagName('pre'))
  codeBlocks.forEach(function(block, index) {
    hljs.highlightBlock(block);
  });

  // カルーセルスライダー
  $('.top_slick_slider').slick();
});