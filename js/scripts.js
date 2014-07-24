/*  Copyright 2014 gokoururi
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $("main").hasClass("mascot") ) {
            removeMascot();
        } else if( $(window).width() > mascotMinWidth && ! $("main").hasClass("mascot") ) {
            setMascot(mascot);
        }
    });
}

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

$(document).ready(function(event) {
    var mascotEnable    = true;
    var mascotPath      = "images/mascots/"
    var mascotList      = [ 'ruri1.png', 'ruri2.png', 'ruri3.png', '1301672926378.png', '1301784304634.png', '1306184031959.png', '1312229941802.png', '1312593323999.png', '1316667379875.png', '1322861419500.png', '1327543300633.png', '1328736836598.png', '1333206795333.png', '1335196795363.png', '1336608418666.png', '1352739873359.png', '1353291633842.png', '1375036110052.png', 'Retro-futuristic_Fashion_144640_1785x2103[theAnimeGallery.com].png', 'bakemonogatari___senjougahara_hitagi___vector_by_kyuubi3000-d6hmgol.png', 'poko_fox_by_paperjoey-d4uc94x.png', 'suzumiya_haruhi_render_by_joseph_uk-d30vs8v.png' ];

    var mascot          = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    var mascotMinWidth  = '750';

    if ( mascotEnable ) { 
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }
});
