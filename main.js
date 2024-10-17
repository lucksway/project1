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
const pup1_close = document.getElementById('close_bt1');

const pup2 = document.getElementById('pup2');
const pup2_close = document.getElementById('close_bt2');

const pup3 = document.getElementById('pup3');
const pup3_close = document.getElementById('close_bt3');



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
  




// 팝업열기
mapButton1.addEventListener('click', function() {
  pup1.style.visibility = 'visible';
  pup1.style.opacity = '1';
  pup1.style.transform = 'translateY(-50%)'
});
// 팝업닫기
pup1_close.addEventListener('click', function() {
    pup1.style.visibility = 'hidden';
    pup1.style.opacity = '0';
    pup1.style.transform = 'translateY(-20%)'
});

// 팝업열기
mapButton2.addEventListener('click', function() {
    pup2.style.visibility = 'visible';
    pup2.style.opacity = '1';
    pup2.style.transform = 'translateY(-50%)'
  });
  // 팝업닫기
pup2_close.addEventListener('click', function() {
    pup2.style.visibility = 'hidden';
    pup2.style.opacity = '0';
    pup2.style.transform = 'translateY(-20%)'
});

// 팝업열기
mapButton3.addEventListener('click', function() {
    pup3.style.visibility = 'visible';
    pup3.style.opacity = '1';
    pup3.style.transform = 'translateY(-50%)'
  });
  // 팝업닫기
pup3_close.addEventListener('click', function() {
    pup3.style.visibility = 'hidden';
    pup3.style.opacity = '0';
    pup3.style.transform = 'translateY(-20%)'
});

mapButton4.addEventListener('click', function() {
  pup1.style.visibility = 'visible';
  pup1.style.opacity = '1';
  pup1.style.transform = 'translateY(-50%)'
});
mapButton5.addEventListener('click', function() {
  pup2.style.visibility = 'visible';
  pup2.style.opacity = '1';
  pup2.style.transform = 'translateY(-50%)'
});
mapButton6.addEventListener('click', function() {
  pup3.style.visibility = 'visible';
  pup3.style.opacity = '1';
  pup3.style.transform = 'translateY(-50%)'
});