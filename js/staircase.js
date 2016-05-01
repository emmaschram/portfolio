$(".staircasebutton").click(function() {
  var invisidiv = $("<div id='invisidiv'></div>");
  document.body.style.overflow = "hidden";    
    
  var popupscreen = $("<div class='popupscreen'></div>");
    
  var rightdiv = $("<div class='rightdiv'><img class='popupimg' id='popupstair' src='images/staircase1.png'></br></div>");
  $(popupscreen).append(rightdiv);
    
  var middlediv = $("<div class='middlediv'><img class='popupimg' id='popupstair' src='images/staircase2.png'></div>");
  $(popupscreen).append(middlediv);
    
  var leftdiv = $("<div class='leftdiv stairtype'><h2 class='popuptitle stairtitle'>STAIRCASE INSTALLATION</h2> <p class='popupdescription'>My first year at BCIT I entered a design competition called Colour Your Campus.</br></br>The idea was to get students to create designs to be installed in various locations around the campus. The graphics had to represent BCIT, so I chose to create 3 crows flying near mountains in the BCIT colours. Crows have been hanging around BCIT since the campus opened, so I decided to utilize that as a theme for my work.</br></br>I was lucky enough to win the category I entered, and my work is displayed as an installation on the staircase of the student association building.</p></div>");
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
