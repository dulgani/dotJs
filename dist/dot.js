(function () {

    'use strict';

    var body = document.getElementById('body');

    body.addEventListener('touchstart', show, false);
    body.addEventListener('mousedown',show, false);

    function show() {

        var x = event.clientX;
        var y = event.clientY;
        var dot = document.createElement('div');

        dot.id = 'dot';
        dot.className = 'dot';
        dot.style.left = (x  - 20 + 'px');
        dot.style.top = (y - 20 + 'px');

        document.body.appendChild(dot);

        setTimeout( function() {
            try {
                body.removeChild(dot);
            } catch ( e ) {
                return false;
            }
        }, 3000 );

    }
    
})();