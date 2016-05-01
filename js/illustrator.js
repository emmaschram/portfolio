$(".illustratorbutton").click(function() {
  var invisidiv = $("<div id='invisidiv'></div>");
  document.body.style.overflow = "hidden";    
    
  var popupscreen = $("<div class='popupscreen'></div>");
    
  var title = $("<h2 class='popuptitle' id='phototitle'>ILLUSTRATOR WORKS</h2>");
  $(popupscreen).append(title);
    
  var liltitle = $("<p class='photoshopinfo'>Various vector graphics created using Adobe Illustrator</p>");
  $(popupscreen).append(liltitle);
    
  var rightdiv = $("<div class='rightdiv' id='photoleft'><img class='popupimg' id='outsideimgs' src='images/illus1.png'></br></br></div>");
  $(popupscreen).append(rightdiv);
    
  var middlediv = $("<div class='middlediv illdiv' id='photomiddle'><img class='popupimg' id='valencard' src='images/illus2.png'></br></br></div>");
  $(popupscreen).append(middlediv);
    
  var leftdiv = $("<div class='leftdiv' id='photoright'><img class='popupimg' id='outsideimgs' src='images/illus3.png'></br></br></div>");
  $(popupscreen).append(leftdiv); 

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