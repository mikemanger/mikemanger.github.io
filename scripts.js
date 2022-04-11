/* globals $, VANTA */

$(function() {
	$.getJSON( './dictionary_m.json', function( data ) {
		const WORD_1 = data[ Math.floor( Math.random() * data.length ) ];
		const WORD_2 = data[ Math.floor( Math.random() * data.length ) ];
		document.title = "Mike Manger's " + WORD_1 + " " + WORD_2;
	});
});

const DEFAULT_BACKGROUND = 'white';
const DEFAULT_PRIMARY_COLOR = '#1d1f21';
const DARK_BACKGROUND = '#1d1f21';
const DARK_PRIMARY_COLOR = '#fa3b7d';
let background = DEFAULT_BACKGROUND;
let primaryColor = DEFAULT_PRIMARY_COLOR;
let animateBackground = true;
let vantaLib = false;

if (window.matchMedia) {
	const IS_DARK = window.matchMedia('(prefers-color-scheme: dark)').matches;
	animateBackground = ! window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	
	if ( IS_DARK ) {
		background = '#1d1f21';
		primaryColor = '#fa3b7d';
	}
	// Check if dark mode changes
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
		updateDarkMode( e.matches );
	});
}

if ( animateBackground ) {
	vantaLib = VANTA.NET({
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
}

function updateDarkMode( isDark ) {
	let background = DEFAULT_BACKGROUND;
	let primaryColor = DEFAULT_PRIMARY_COLOR;
	if ( isDark ) {
		background = DARK_BACKGROUND;
		primaryColor = DARK_PRIMARY_COLOR;
	}
	if ( animateBackground ) {
		vantaLib.setOptions({
			backgroundColor: background,
			color: primaryColor
		});
	}
}
