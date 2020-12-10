var b = $(".slides");
var c = 1;
var t = 1;
var a = b.children().length;
console.log(a);
 $(".gen").prop("checked", true)
 $(".gen1").prop("checked", false)
 $(".gen2").prop("checked", false)
setInterval(function () {
    b.animate({
        marginLeft: '-=1370px'
    }, 2000, function () {
        c++;
        console.log(c)
        
         if (c == 2) {
            $('.button1-input').on('click', function () {
                b.animate({
                    marginLeft: '0px'
                }, 1000, function () {
                    c++;
                    if (c == a) {
                        c = 1;
                        $('.slides').css('marginLeft', '0px');
                    }
                })
            })
            $(".gen").prop("checked", false)
            $(".gen1").prop("checked", true)
            $(".gen2").prop("checked", false)
        }
        else if (c == 3) {
            $(".gen").prop("checked", false)
            $(".gen1").prop("checked", false)
            $(".gen2").prop("checked", true)
        }

        else if (c === a) {
            c = 1;
            $('.slides').css('marginLeft', '0px');
            $(".gen").prop("checked", true)
            $(".gen1").prop("checked", false)
            $(".gen2").prop("checked", false)
        }
        
    });
   

}, 5000)

$('.button-input').on('click', function () {
    b.animate({
        marginLeft: '-=1370px'
    }, 1000, function () {
        c++;
        if (c == 1) {
            $(".gen").prop("checked", true)
            $(".gen1").prop("checked", false)
            $(".gen2").prop("checked", false)
        }
        else if (c == 2) {
            $(".gen").prop("checked", false)
            $(".gen1").prop("checked", true)
            $(".gen2").prop("checked", false)
        }
        else if (c == 3) {
            $(".gen").prop("checked", false)
            $(".gen1").prop("checked", false)
            $(".gen2").prop("checked", true)
        }

        else if (c === a) {
            c = 1;
            $('.slides').css('marginLeft', '0px');
            $(".gen").prop("checked", true)
            $(".gen1").prop("checked", false)
            $(".gen2").prop("checked", false)
        }
    });
})
$('.gen').on('click', function () {

    $('.slides').css('marginLeft', '0px');
    $(".gen1").prop("checked", false)
    $(".gen2").prop("checked", false)
});
$('.gen1').on('click', function () {
    $('.slides').css('marginLeft', '-1370px');
    $(".gen2").prop("checked", false)
    $(".gen").prop("checked", false)
});
$('.gen2').on('click', function () {
    $('.slides').css('marginLeft', '-2740px');
    $(".gen1").prop("checked", false)
    $(".gen").prop("checked", false)
});
