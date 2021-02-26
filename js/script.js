$(document).ready(function(){
    $(".clickable").click(function() {
        $(".design-hidden").toggle();
        $(".design-visible").toggle();
    });
    $(".dev-clickable").click(function() {
        $(".development-hidden").toggle();
        $(".development-visible").toggle();
    });
    $(".management-clickable").click(function() {
        $(".management-hidden").toggle();
        $(".management-visible").toggle();
    });
})