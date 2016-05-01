$(".photoshopbutton").click(function() {
  var invisidiv = $("<div id='invisidiv'></div>");
  document.body.style.overflow = "hidden";    
    
  var popupscreen = $("<div class='popupscreen' id='popupscreenbig'></div>");
    
  var title = $("<h2 class='popuptitle' id='phototitle'>PHOTOSHOP WORKS</h2>");
  $(popupscreen).append(title);
    
  var liltitle = $("<p class='photoshopinfo'>Various works created using photoshop, showing the steps it took to create the final product</p>");
  $(popupscreen).append(liltitle);
    
  var rightdiv = $("<div class='rightdiv' id='photoleft'><img class='popupimgb' src='images/astro1.png'></br></br><img class='popupimgb' src='images/eclipse1.png'></div>");
  $(popupscreen).append(rightdiv);
    
  var middlediv = $("<div class='middlediv' id='photomiddle'><img class='popupimgb' src='images/astro2.png'></br></br><img class='popupimgb' src='images/eclipse2.png'></div>");
  $(popupscreen).append(middlediv);
    
  var leftdiv = $("<div class='leftdiv' id='photoright'><img class='popupimgb' src='images/astro3.png'></br></br><img class='popupimgb' src='images/eclipse3.png'></div>");
  $(popupscreen).append(leftdiv); 
    
  var rightdiv2 = $("<div id='right2'><img class='popupimg dancerimg' src='images/dancer1.png'></div>");
  $(popupscreen).append(rightdiv2);
    
  var leftdiv2 = $("<div id='left2'><img class='popupimg dancerimg' src='images/dancer2.png'></div>");
  $(popupscreen).append(leftdiv2); 

  var closebutton = $("<span class='closebutton'>x</span>");
  $(popupscreen).append(closebutton);
    
  $(document.body).append(invisidiv);
    
    $(document.body).append(popupscreen);
         
    $(invisidiv).click(function() {
     $(popupscreen).remove();
     $(invisidiv).remove();    
    });      
  
  $(closebutton).click(function() {
    $(popupscreen).remove();
    document.body.style.overflow = "visible";  
  });

});
