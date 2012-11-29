$(document).ready(function() {
    $(".external-open a").attr('target', "_blank");
    var pics = [
        "ezos-ruby.jpg",
        "ezos-bayrak.jpg",
        "amiga-bulk.jpg",
        "amiga-kick13.jpg",
        "amiga-roms.jpg",
        "amiga-wb.jpg",
        "bidik.jpg",
        "breakpoint2005-03.jpg",
        "breakpoint2006-03.jpg",
        "breakpoint2006-04.jpg",
        "breakpoint2006-07.jpg",
        "breakpoint2006-09.jpg",
        "c128d-2.jpg",
        "c128d.jpg",
        "c16.jpg",
        "c64.gif",
        "grft-rez.jpg",
        "grft-s2k.jpg",
        "myroom-2.jpg",
        "myroom.jpg",
        "nightshift2006-04.jpg",
        "ns07-12.jpg",
        "ns07-16.jpg",
        "ns07-20.jpg",
        "ns07-22.jpg",
        "ns07-23.jpg",
        "ns07-24.jpg",
        "ns07-25.jpg",
        "omerim.jpg",
        "oyuncak-muzesi-04.jpg",
        "retro-replay.gif",
        "thb.jpg",
        "turbo-graf-1.jpg",
        "turbo-vigo.jpg",
        "yesim_ezel_01.jpg"
    ], irq,
    images = [];
    
    $.each(pics, function(i, a){
        images[i] = new Image();
        images[i].src = "images/splash/" + a;
    });
    
    function irq_loader(){
        var r = Math.ceil(Math.random()*pics.length-1),
            f = images[r].src;
        $("#pics").animate({
            opacity: 0
        }, "slow", function(){
            $(this).css({
                "background": "url(" + f + ")",
                "background-size": "100%",
            }).animate({
                opacity: 1,
            }, "slow");
        })
        irq = window.setTimeout(irq_loader, 10*1000);
    }
    
    irq_loader();
});
