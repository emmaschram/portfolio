$(".apresbutton").click(function() {
  var invisidiv = $("<div id='invisidiv'></div>");  
  document.body.style.overflow = "hidden";  
  var popupscreena = $("<div class='popupscreen'></div>");
    
  var rightdiv = $("<div class='rightdiv'><img class='popupimg' src='images/apresski1.png'></br></div>");
  $(popupscreena).append(rightdiv);
    
  var middlediv = $("<div class='middlediv'><img class='popupimg' src='images/apresski2.png'></br><img id='apreslogo' src='images/Apres-Ski-Logo.png'/></div>");
  $(popupscreena).append(middlediv);
    
  var leftdiv = $("<div class='leftdiv'><h2 class='popuptitle aprestitle'>APRES SKI</h2> <p class='popupdescription'>The idea behind Apres Ski was to create a blog that displayed food and drink that could be enjoyed after a day of skiing. </br></br>To create this blog I used an existing free wordpress theme and modified it to eventually become Apres Ski. </br></br> The idea was to make the blog visual through the use of inviting images and graphics, as well as ensure the user is not overwhelmed with possibilities of things to make. Since it's purpose is recipes to make after skiing, the user is most likely hungry and has very little patience. </br></br> Many blogs bombard you with posts and unorganized content throughout the site, so this was combatted  by limiting the scroll on the home page so only 8 posts load, and the user can choose to view more if they please. In addition, there is a well organized recipes page, and the format of each of the posts is identical.</br></br>Created Using: Illustrator / HTML / CSS / WordPress </br></br></div>");
  $(popupscreena).append(leftdiv); 

  var closebutton = $("<span class='closebutton'>x</span>");
  $(popupscreena).append(closebutton);
  
    $(document.body).append(invisidiv);
    
    $(document.body).append(popupscreena);
         
    $(invisidiv).click(function() {
     $(popupscreena).remove();
     $(invisidiv).remove();    
    });  
  
  $(closebutton).click(function() {
    $(popupscreena).remove(); 
    document.body.style.overflow = "visible";  
  });

});
