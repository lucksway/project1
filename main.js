// 요소들 선택
const mapButton1 = document.getElementById('map_button1');
const mapButton2 = document.getElementById('map_button2');
const mapButton3 = document.getElementById('map_button3');
const mapButton4 = document.getElementById('map_button4');
const mapButton5 = document.getElementById('map_button5');
const mapButton6 = document.getElementById('map_button6');
const map1 = document.getElementById('map1');
const map2 = document.getElementById('map2');
const map3 = document.getElementById('map3');
const map4 = document.getElementById('map4');
const map5 = document.getElementById('map5');
const map6 = document.getElementById('map6');

const pup1 = document.getElementById('pup1');
const pup1_close = document.getElementById('close_bt');



// 맵 투명도 변경
mapButton1.addEventListener('mouseover', function() {
  map1.style.opacity = '0.7';
});
mapButton1.addEventListener('mouseout', function() {
  map1.style.opacity = '0.3';
});

mapButton2.addEventListener('mouseover', function() {
  map2.style.opacity = '0.7';
});
mapButton2.addEventListener('mouseout', function() {
  map2.style.opacity = '0.3';
});

mapButton3.addEventListener('mouseover', function() {
  map3.style.opacity = '0.7';
});
mapButton3.addEventListener('mouseout', function() {
  map3.style.opacity = '0.3';
});

mapButton4.addEventListener('mouseover', function() {
  map4.style.opacity = '0.7';
});
mapButton4.addEventListener('mouseout', function() {
  map4.style.opacity = '0.3';
});

mapButton5.addEventListener('mouseover', function() {
  map5.style.opacity = '0.7';
});
mapButton5.addEventListener('mouseout', function() {
  map5.style.opacity = '0.3';
});

mapButton6.addEventListener('mouseover', function() {
  map6.style.opacity = '0.7';
});
mapButton6.addEventListener('mouseout', function() {
  map6.style.opacity = '0.3';
});
  




// 클릭 이벤트 - map_button1
mapButton1.addEventListener('click', function() {
  pup1.style.visibility = 'visible';
  pup1.style.opacity = '1';
  pup1.style.transform = 'translateY(-50%)'
});

// 클릭 이벤트 - div3 (reset 버튼)
pup1_close.addEventListener('click', function() {
    pup1.style.visibility = 'hidden';
    pup1.style.opacity = '0';
    pup1.style.transform = 'translateY(-20%)'
});
