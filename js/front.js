$(function () {

    lightbox();
    sticky();
    utils();
    map();

});

/* lightbox */

function lightbox() {

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}

/* sticky header */

function sticky() {

    $(".header").sticky();

}


/* map */

function map() {

    var styles = [
        {
            "elementType": "labels.all",
            "stylers": [
                {"color": "#a3a3c2"},
                {"saturation": -60}, 
                {"lightness": -5},
                {"visibility": "off"}
                ]
        }, {
            "featureType": "landscape.all",
            "stylers": [
                {"color": "#a3a3c2"},
                {"saturation": -60}, 
                {"lightness": -5},
                {"visibility": "on"}
                ]
        }, {
            "featureType": "poi",
            "stylers": [
                {"color": "#a3a3c2"},
                {"saturation": -60},
                {"lightness": 5},
                {"visibility": "on"}
                    ]
        }, {
            "featureType": "road.highway",
            "stylers": [
                {"color": "#a3a3c2"},
                {"saturation": -50},
                {"lightness": 5},
                {"visibility": "on"}
                ]
        }, {
            "featureType": "road.arterial",
            "stylers": [
                {"color": "#a3a3c2"},
                {"saturation": -60},
                {"lightness": 10},
                {"visibility": "on"}
                ]
        }, {
            "featureType": "road.local",
            "stylers": [
                {"color": "#a3a3c2"},
                {"saturation": -600}, 
                {"lightness": 20},
                {"visibility": "on"}
                ]
        }, {
            "featureType": "transit",
            "stylers": [
                {"color": "#a3a3c2"},
                {"saturation": -100},
                {"visibility": "on"}
                ]
        }, {"featureType": "administrative.province", 
            "stylers": [
                {"color": "#a3a3c2"},
                {"visibility": "off"}
                ]
        }, {
            "featureType": "water",
            "elementType": "labels", 
            "stylers": [
                {"color": "#a3a3c2"},
                {"visibility": "off"},
                {"lightness": -55},
                {"saturation": -100}
                ]
        }, {
            "featureType": "water",
            "elementType": "geometry", 
            "stylers": [
                {"hue": "#b3c6ff"},
                {"lightness": 50},
                {"saturation": 7}
                ]
            }];
    map = new GMaps({
        el: '#map',
        lat: 33.784700,
        lng: -118.195957,
        zoomControl: true,
        zoomControlOpt: {
            style: 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        scrollwheel: false,
        draggable: false,
        zoom: 9,
        styles: styles
    });

    var image = 'img/marina.svg';

    map.addMarker({
        lat: 33.784700,
        lng: -118.195957,
        icon: image/* ,
         title: '',
         infoWindow: {
         content: '<p>HTML Content</p>'
         }*/
    });
}

function utils() {

    /* tooltips */

    $('[data-toggle="tooltip"]').tooltip();

    /* click on the box activates the radio */

    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });
    /* click on the box activates the link in it */

    $('.box.clickable').on('click', function (e) {

        window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/

    $('.external').on('click', function (e) {

        e.preventDefault();
        window.open($(this).attr("href"));
    });
    /* animated scrolling */

    /* animated scrolling */

    $('.scroll-to, #navigation a').click(function (event) {
        event.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];

        $('body').scrollTo($('#' + trgt), 800, {offset: -40});

    });

}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).innerHeight() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}

$(window).load(function () {

    windowWidth = $(window).width();
    windowHeight = $(window).height();

    $(this).alignElementsSameHeight();

});
$(window).resize(function () {

    newWindowWidth = $(window).width();
    newWindowHeight = $(window).height();

    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 100);
        windowWidth = newWindowWidth;
        windowHeight = newWindowHeight;
    }

});
