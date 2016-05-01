$(".vanhikebutton").click(function() {
  var invisidiv = $("<div id='invisidiv'></div>");  
  document.body.style.overflow = "hidden";
    
  var popupscreen = $("<div class='popupscreen'></div>");
    
  var rightdiv = $("<div class='rightdiv'><img class='popupimg' src='images/vanhike3.png'></br></div>");
  $(popupscreen).append(rightdiv);
    
  var middlediv = $("<div class='middlediv'><img class='popupimg' src='images/vanhike2.png'></div>");
  $(popupscreen).append(middlediv);
    
  var leftdiv = $("<div class='leftdiv'><h2 class='popuptitle'>VANHIKE</h2> <p class='popupdescription'>Vanhike was created for a final project in my first year at BCIT, and it's purpose is to be a resource for people wanting to find hikes in and around the Vancouver area. </br></br> The idea behind the site was to make it as easy as possible for the user to find a hike in their area,               as well as provide all the information they would want to know about their particular chosen hike in a simple and effective way. I also wanted the site to be easily used and navigated by all age groups, so I ensured that finding a hike could be done           in the least number of clicks possible. In this case, only 2. </br></br> On the hike area page, each of the hike titles are clickable, and when clicked, all the information about the chosen hike will appear below it.</br></br>*Site also developed for mobile. </br></br> Created Using: Photoshop / Illustrator / HTML / CSS / JavaScript / Jquery </p></div>");
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


