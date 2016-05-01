$(".pinebirchbutton").click(function() {
  var invisidiv = $("<div id='invisidiv'></div>");      
  document.body.style.overflow = "hidden";
    
  var popupscreen = $("<div class='popupscreen'></div>");
    
  var rightdiv = $("<div class='rightdiv'><img class='popupimg' src='images/pinebirch1.png'></br></div>");
  $(popupscreen).append(rightdiv);
    
  var middlediv = $("<div class='middlediv'><img class='popupimg' src='images/pinebirch2.png'></div>");
  $(popupscreen).append(middlediv);
    
  var leftdiv = $("<div class='leftdiv'><h2 class='popuptitle pinetitle'>PINE&amp;BIRCH</h2> <p class='popupdescription'>PINE & BIRCH was a final project for a web development class where a partner and I collaborated to create a fully functioning fictional e-commerce website.</br></br>We chose to create a site that sells handcrafted wooden children’s toys.</br></br>The site also has an administrative login where the “owner” of the company can add new products, edit information about existing products and more.</br></br> The site was given a very minimalist and clean look as we wanted the focus to be on the products being sold, as well as ensure the experience of viewing and purchasing a product was straightforward and pleasant, so the customer had no distractions or possible problems stopping them from completing their purchase.</br></br>*site also developed for mobile </br></br> Created Using: Photoshop / Illustrator / HTML / CSS / JavaScript / Jquery / PHP / MySQL </p></div>");
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


