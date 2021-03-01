$(document).ready(function () {
    // Toggle effects on the icons
    $(".clickable").click(function () {
        $(".design-hidden").toggle();
        $(".design-visible").toggle();
    });
    $(".dev-clickable").click(function () {
        $(".development-hidden").toggle();
        $(".development-visible").toggle();
    });
    $(".management-clickable").click(function () {
        $(".management-hidden").toggle();
        $(".management-visible").toggle();
    });

    // Portfolio Hover Effect
    $("#portfolio img").hover(function () {
        $(this).stop().animate({
            opacity: .5 
        });
        }, function () {
            $(this).stop().animate({
                opacity: 2
            });
    });

    // Contact Form
    $("#contact-us").submit(function(event){
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        event.preventDefault();

        alert("Thank You! Feedback collected.We value your feedback.");

        $("form").trigger("reset");
    })
})