$(".eskbutton").click(function() {
var invisidiv = $("<div id='invisidiv'></div>"); 
document.body.style.overflow = "hidden";    
    
  var popupscreen = $("<div class='popupscreen'></div>");
    
  var rightdiv = $("<div class='rightdiv'><img class='popupimg' src='images/esk1.png'></br></div>");
  $(popupscreen).append(rightdiv);
    
  var middlediv = $("<div class='middlediv'><img class='popupimg' src='images/esk2.png'></div>");
  $(popupscreen).append(middlediv);
    
  var leftdiv = $("<div class='leftdiv'><h2 class='popuptitle'>ESK DESIGN</h2> <p class='popupdescription'>ESK DESIGN was a collaboration between 2 team members and I to create a fictional design studio’s website. </br></br>We chose to design ultimately with ease of use in mind. We ensured that the user could find all the information they required easily and efficiently, based on the goal of the company generating leads and using the site as an example of what we could do for a cient.</br></br>In order to keep the user on the site as long as possible, we added interactive elements such as hover effects that made new icons or text appear, and a portfolio section to view our work. </br></br>The site can be viewed at:</br></br><a href='http://eskdesign.emmaschram.com' target='_blank' class='weblink'>eskdesign.emmaschram.com</a></br></br>Created Using: Photoshop / Illustrator / HTML / CSS </p></div>");
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


