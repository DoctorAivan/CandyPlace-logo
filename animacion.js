    $(function()
    {
    //  Run Logo Animation
        logoAnimation();
    });

//  Run Logo Animation
    function logoAnimation()
    {
    //  Get objects
        const candyPlaceLetras = $("#candyplace-logo-letras");
        const candyPlaceGlow = $("#candyplace-logo-letras-glow");
        const candyPlaceH2 = $("#candyplace-logo-h2");
        const candyPlaceLens = $("#candyplace-lens");
        const candyPlaceLogo = $("#candyplace-logo-image");

        TweenMax.staggerFromTo( candyPlaceLetras.find(".grupo-a"), 0.8, {autoAlpha:0, scale:1 , rotationY: 90}, {autoAlpha:1, scale:1, rotationY: 0}, 0.6);	
        TweenMax.staggerFromTo( candyPlaceLetras.find(".grupo-b"), 0.8, {autoAlpha:0, scale:1 , rotationY: 90}, {autoAlpha:1, scale:1, rotationY: 0, delay:0.4}, 0.6);	
        TweenMax.staggerFromTo( candyPlaceLetras.find(".grupo-c"), 0.8, {autoAlpha:0, scale:1 , rotationY: 90}, {autoAlpha:1, scale:1, rotationY: 0, delay:0.8}, 0.6);	
        TweenMax.staggerFromTo( candyPlaceH2.find("span"), 0.5, {autoAlpha:0, scale:0.5}, {autoAlpha:1, scale:1, delay:2.5}, 0.15);	

        var logo = new TimelineMax({delay:2.5})
        logo.to( candyPlaceLogo , 0, { top: -50, scale: 1, rotationY: 360, autoAlpha:0 } )
        .to( candyPlaceLogo , 1.2, { top: 0, scale: 1.2, rotationY: 0, autoAlpha:1 } )
        .to( candyPlaceLogo , 1, { top: 0, scale: 1, rotationY: 0, autoAlpha:1 } );

        var glow = new TimelineMax({delay:1.3})
        glow.to( candyPlaceGlow , 1, { autoAlpha:0 } )
        .to( candyPlaceGlow , 1, { autoAlpha:1 } )
        .to( candyPlaceGlow , 1, { autoAlpha:0 } );

        var lens = new TimelineMax({delay:0.9})
        lens.to( candyPlaceLens , 1, { scale:0.5 , autoAlpha:0 } )
        .to( candyPlaceLens , 1, { scale:1.1 , autoAlpha:1 } )
        .to( candyPlaceLens , 1, { scale:0.5 , autoAlpha:0 } );

        var light_1 = new TimelineMax({delay:2.1})
        light_1.to( '.candyplace-logo-light-1' , 0.7, { left: -38, scale:1 , autoAlpha:0 } )
        .to( '.candyplace-logo-light-1' , 0.7, { left: -58, scale:1 , autoAlpha:1 } )
        .to( '.candyplace-logo-light-1' , 1.2, { left: -78,scale:0.5 , autoAlpha:0 } );

        var light_2 = new TimelineMax({delay:2.5})
        light_2.to( '.candyplace-logo-light-2' , 0.7, { left: 215, scale:1 , autoAlpha:0 } )
        .to( '.candyplace-logo-light-2' , 0.7, { left: 195, scale:1 , autoAlpha:1 } )
        .to( '.candyplace-logo-light-2' , 1.2, { left: 175, scale:0.5 , autoAlpha:0 } );

        var light_3 = new TimelineMax({delay:2.6})
        light_3.to( '.candyplace-logo-light-3' , 0.7, { top:20, scale:1 , autoAlpha:0 } )
        .to( '.candyplace-logo-light-3' , 0.7, { top:-33, scale:1 , autoAlpha:1 } )
        .to( '.candyplace-logo-light-3' , 1.5, { top:-53, scale:0.5 , autoAlpha:0 } );

    }