$("myID").click(function(){
    $(this).hide();
  });



  screen("myID").on("click",function(){
      console.log("Got to #myID");
  });


  $(#myID).on("click",function(){
      $(".fadeMe").fadeToggle("slow");
  })

