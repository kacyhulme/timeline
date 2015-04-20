
$(function() {
 $( "#tooltip1" ).tooltip({
  tooltipClass: 'custom-tooltip-styling-one',
    content: "Transit of Mercury!"
  });


 $( "#tooltip1" ).tooltip({
    position: {
      my: "right+11 top-200%",
      at: "right center",
    },
    hide: false,
  });

// TOOLTIP #2
 $( "#tooltip2" ).tooltip({
  tooltipClass: 'custom-tooltip-styling-two',
    content: "People\'s Republic of China\'s obligation to run Macau expires"
  });


 $( "#tooltip2" ).tooltip({
    position: {
      my: "right+145 top-200%",
      at: "right center",
    },
    hide: false
  });

// TOOLTIP #3
 $( "#tooltip3" ).tooltip({
  tooltipClass: 'custom-tooltip-styling-three',
    content: "The planetoid 90377 Sedna reaches perihelion"
  });

 $( "#tooltip3" ).tooltip({
    position: {
      my: "right+125 top-200%",
      at: "right center",
    },
    hide: false
  });
});
