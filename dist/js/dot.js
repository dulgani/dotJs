(function () {

    'use strict';
    // get the body
    var body = document.getElementById('body');

    // add Event Listener for click or touch the screen
    // compatibility with IE8
    if(body.attachEvent) {
        body.attachEvent('ontouchstart', dotAnimation);
        body.attachEvent('onmousedown', dotAnimation);
    } else {
        body.addEventListener('touchstart', dotAnimation, false);
        body.addEventListener('mousedown', dotAnimation, false);
        body.addEventListener('keydown', dotAnimationCtrl, false);
    }

    // function who launch dot animation and create the dot element
    function dotAnimation(event) {
        try {
            if(event.preventDefault()) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }

            var x = event.clientX;
            var y = event.clientY;
            var dot = document.createElement('div');

            dot.id = 'dot';
            dot.className = 'dot';
            dot.style.left = (x - 20 + 'px');
            dot.style.top = (y - 20 + 'px');

            document.body.appendChild(dot);
        } catch (event) {
            return false;
        }

        // timeout for destroy dot element and clean HTML DOM
        setTimeout(function() {
            try {
                body.removeChild(dot);
            } catch (event) {
                return false;
            }
        }, 3000);

    }

    // function for find a mousse in your screen
    function dotAnimationCtrl(event) {
        if(event.keyCode === 17) {
            try {
                if(event.preventDefault()) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }

                var dot = document.createElement('div');

                dot.id = 'dot';
                dot.className = 'dot';

                document.body.appendChild(dot);
            } catch(event) {
                return false;
            }
            // timeout for destroy dot element and clean HTML DOM
            setTimeout(function () {
                try {
                    body.removeChild(dot);
                } catch (event) {
                    return false;
                }
            }, 3000);
        }
    }

})();