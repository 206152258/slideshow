

var allbutton = $("#allbutton>input");
console.log(allbutton.length);
for (var i = 0; i < allbutton.length; i++) {
    $(allbutton[i]).on('click', function (x) {
        var index = $(x.currentTarget).index();
        var n = index * -250;
        $("#images").css({ transform: 'translate(' + n + 'px)' })
    })
}

var n = 0;
var alength = allbutton.length;
var clear = setInterval(() => {
    n = n + 1;
    allbutton.eq(n % alength).trigger('click')
        .addClass("red")
        .siblings(".red").removeClass("red");
}, 3000);

$("#first").on('mouseenter', function () {
    clearInterval(clear)
})

$("#first").on('mouseleave', function () {
    clear = setInterval(() => {
        n = n + 1;
        allbutton.eq(n % alength).trigger('click')
            .addClass("red")
            .siblings(".red").removeClass("red");
    }, 3000);
})