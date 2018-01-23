function appendNewShoppingItem() {
  $("#js-shopping-list-form").submit("click", function(e){
    e.preventDefault();
    var inputVal = $(".js-shopping-list-entry").val();
    $(".shopping-list").append("<li><span class='shopping-item'>" + inputVal + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>");
  });
}

function removeShoppingItem() {
  $(".shopping-list").on( "click", ".shopping-item-delete", function(event) {
    $(this).closest("li").remove();
  });
}

function toggleCheckShoppingItem() {
  $(".shopping-list").on( "click", ".shopping-item-toggle", function(event) {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });
}

$(function(){
  appendNewShoppingItem();
  removeShoppingItem();
  toggleCheckShoppingItem();
})
