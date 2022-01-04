$(function() {
    $.getJSON( './dictionary_m.json', function( data ) {
        var word_1 = data[ Math.floor( Math.random() * data.length ) ];
        var word_2 = data[ Math.floor( Math.random() * data.length ) ];
        document.title = "Mike Manger's " + word_1 + " " + word_2;
    });
});

let background = 'white';
let primaryColor = '#1d1f21';

if (window.matchMedia) {
    const IS_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ( IS_DARK ) {
        background = '#1d1f21';
        primaryColor = '#fa3b7d';
    }
    // Check if dark mode changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        updateDarkMode( e.matches );
    });
}

const BACKGROUND = VANTA.NET({
    el: 'body',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    maxWidth: 400,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundColor: background,
    color: primaryColor,
    maxDistance: 17.00,
    spacing: 20.00
});

function updateDarkMode( isDark ) {
    let background = 'white';
    let primaryColor = '#1d1f21';
    if ( isDark ) {
        background = '#1d1f21';
        primaryColor = '#fa3b7d';
    }
    BACKGROUND.setOptions({
        backgroundColor: background,
        color: primaryColor
    })
}