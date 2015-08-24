(function () {

    'use strict';
    // get the body
    var body = document.getElementById('body');

    // add Event Listener for click or touch the screen
    body.addEventListener('touchstart', dotAnimation, false);
    body.addEventListener('mousedown',dotAnimation, false);

    // function who launch dot animation and create the dot element
    function dotAnimation() {
        var x = event.clientX;
        var y = event.clientY;
        var dot = document.createElement('div');

        dot.id = 'dot';
        dot.className = 'dot';
        dot.style.left = (x  - 20 + 'px');
        dot.style.top = (y - 20 + 'px');

        document.body.appendChild(dot);

        // timeout for destroy dot element and clean HTML DOM
        setTimeout( function() {
            try {
                body.removeChild(dot);
            } catch ( e ) {
                return false;
            }
        }, 3000 );

    }

})();