
// check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("changeLi");
});

$("ul").on("click","span", function(event){
  $(this).parent().fadeOut(700, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-magic'></i></span> "+todoText+"</li>");
  }
});

$(".fa-hat-wizard").on("click", function(){
  $("input[type='text']").fadeToggle();
});
