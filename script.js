var url1 = "https://photooboi.com.ua/uploads/images/360b360/4770.jpg";
var url2 = "https://photooboi.com.ua/uploads/images/4770.jpeg";
var url3 = "https://photooboi.com.ua/uploads/360b360/4770.tif";
var url4 = "https://photooboi.com.ua/images/360b360/4770.tiff";
var url5 = "https://photooboi.com.ua/4770.png";
var url6 = "https://photooboi.com.ua/1245/4770.gif";
var url7 = "https://photooboi.com.ua/images/360b360/4770.com";
var url8 = "https://photooboi.com.ua/4770";
var url9 = "https://photooboi.com.ua/1245/4770.ua";
var url10 = "https://photooboi.com.ua/images/360b360/4770gif";
var url11 = "http://photooboi.com.ua/images/360b360/4770gif";
var url12 = "https://photooboi .com.ua/images/360b360/4770gif";


function checkImage(url){
  let reg = /[https://](\w+\S)\.(jpg|jpeg|tif|tiff|png|gif)$/;
  console.log(reg.test(url));
}

checkImage(url1);
checkImage(url2);
checkImage(url3);
checkImage(url4);
checkImage(url5);
checkImage(url6);
checkImage(url7);
checkImage(url8);
checkImage(url9);
checkImage(url10);
checkImage(url11);
checkImage(url12);