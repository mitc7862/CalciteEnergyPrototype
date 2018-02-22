TweenMax.set('#widgetPanel', {
    scale: 1,
    x: -100,
    autoAlpha: 0,
});

TweenMax.set('#mainPanel', {
    x: -300,
    autoAlpha: 0,
});

TweenMax.set('#Popup', {
    transformOrigin:'bottom center',
    y: 0,
    scale: .6,
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    autoAlpha: 0,
});

TweenMax.set('#Feature', {
    boxShadow: "0px 0px 0px 0px rgba(12,207,255,1), 0px 0px 0px 0px rgba(0,12,207,1)"
});


$('#startWorkflow').on('click',
    function() {
        TweenMax.set('#widgetPanel', {
            scale: 1,
            x: -100,
            autoAlpha: 0,
        });
        TweenMax.to('#widgetPanel', .5, {
            x: 0,
            autoAlpha: 1,
            ease: Expo.easeOut
        }, 3 );
});

$('#widgetConfirm').on('click',
    function() {
        TweenMax.to('#widgetPanel', .5, {
            scale: 1.05,
            autoAlpha: 0,
            ease: Expo.easeOut
        }, 3 
    );
});

$('#widgetCancel').on('click',
    function() {
        TweenMax.to('#widgetPanel', .2, {
            scale: 1,
            x: -100,
            autoAlpha: 0,
            ease: Expo.ease
        }, 3 
    );
});

$('#widgetClose').on('click',
    function() {
        TweenMax.to('#widgetPanel', .2, {
            scale: 1,
            x: -100,
            autoAlpha: 0,
            ease: Expo.ease
        }, 3 
    );
});

// $('.btn').mouseover(function (e) {
//     TweenMax.to($(this), .2, {
//         scale: 1.05,
//         ease: Expo.ease
//     });
// });

// $('.btn').mouseout(function (e) {
//     TweenMax.to($(this), .2, {
//         scale: 1,
//         ease: Expo.ease
//     });
// });  


$('#openPanel').on('click',
    function() {
        TweenMax.to('#mainPanel', .2, {
            x: 0,
            autoAlpha: 1,
            ease: Expo.ease
        }, 3);

        TweenMax.to('.esri-ui-top-left', .2, {
            x: 300,
            ease: Expo.ease
        }, 3);
});

$('#panelClose').on('click',
    function() {
        TweenMax.to('#mainPanel', .2, {
            x: -300,
            autoAlpha: 0,
            ease: Expo.ease
        }, 3);

        TweenMax.to('.esri-ui-top-left', .2, {
            x: 0,
            ease: Expo.ease
        }, 3);
});


$('#Feature').on('click',
    function() {

        TweenMax.to('#Popup', .2, {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.2)",
            ease: Back.easeOut.config(1.7)
        }, 3);

        TweenMax.to('#Feature', .1, {
            boxShadow: "0px 0px 0px 2px rgba(12,207,255,1), 0px 0px 0px 4px rgba(0,12,207,1)",
            ease: Back.easeOut.config(1.7)
        }, 3);
});

$('#popupClose').on('click',
    function() {
        TweenMax.to('#Popup', .2, {
            y: 0,
            scale: .8,
            autoAlpha: 0,
            ease: Sine.easeIn
        }, 3);

        TweenMax.to('#Feature', .1, {
            boxShadow: "0px 0px 0px 0px rgba(12,207,255,1), 0px 0px 0px 0px rgba(0,12,207,1)"
        }, 3);
});

