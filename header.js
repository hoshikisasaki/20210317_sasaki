function humbuger(){
  document.getElementById('js-line1').classList.toggle('line_1');
  document.getElementById('js-line2').classList.toggle('line_2');
  document.getElementById('js-line3').classList.toggle('line_3');
  document.getElementById('js-background').classList.toggle('in');
};

document.getElementById('js-hamburger').addEventListener('click',function(){
  humbuger();
});