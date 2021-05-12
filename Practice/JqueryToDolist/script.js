import $ from 'jquery';

$(document).ready(function() {
    $(".txtBtn").on('keyup', function(e) {
        if(e.keyCode === 13 && $(".txtBtn").val() != "" ) {
            let task  = $("<div class='task'></div>").text($(".txtBtn").val());
            let del = $("<i class='fas fa-trash-alt'></i>").click(function() {
                let p = $(this).parent();
                p.fadeOut(function () {
                    p.remove();
                });
            });

            let check = $("<i class='fas fa-check'></i>").click(function() {
                let p = $(this).parent();
                p.fadeOut(function () {
                    $('.comp').append(p);
                    p.fadeIn();
                });
                $(this).remove();
            });

            task.append(del, check);
            $(".notcomp").append(task);    
            //to clear form
            $(".txtBtn").val("");
        }
    });

});