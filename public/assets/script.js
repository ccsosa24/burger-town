//$(document).ready(function() {
  //alert("in script")
    
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();

      console.Console("THIS IS RUNNING")
      console.log(burger_id);
      $.ajax({
        method: "PUT",
        url: "/burger/" + burger_id
      }).then(function(data) {
        location.reload();
      });
  
    });

    $(document).on("click",".burger1", function(){
      event.preventDefault()
      var burger_id = $(this).attr("id")
     // console.log(burger_id)
      $.ajax({
        url: "/burgers/" + burger_id,
        method: "PUT"
        
      }).then(function(data) {
        location.reload();
      });
    })
  //});
  