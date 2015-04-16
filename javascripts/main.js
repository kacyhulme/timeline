// $(document).ready(function() {
//   $(".item").first().hover(function() {
//     $('.item').first().attr('title','Transit of Mercury');
//     $(this).toggleClass('tip');
//   });

//   // $(".item:nth-child(2)").hover(function() {
//   //   $('.item:nth-child(2)').attr('title','People\'s Republic of China\'s obligation to run Macau expires');
//   //   $(this).toggleClass('tip');
//   // });

//   // $(".item:nth-child(3)").hover(function() {
//   //   $('.item:nth-child(3)').attr('title','The planetoid 90377 Sedna reaches perihelion');
//   //   $(this).toggleClass('tip');
//   // });
// });


var showToolTip = function() {
 var element = document.getElementById("tooltip");
 element.className = "tip";
};

var hideToolTip = function() {
  var element = document.getElementById("tooltip");
  element.className = "tool-class";
};