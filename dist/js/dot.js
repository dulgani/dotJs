// check if navigator is IE
function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

// initialize the object compatibility with IE
function init(type, options)
{
    var body = document.getElementById('body');

    if(body.attachEvent) {
        body.attachEvent("on" + type, function () {
            new Dot(options);
        });
    } else {
        body.addEventListener(type, function () {
            new Dot(options);
        }, false);
    }
}

// dot object on the screen
var Dot = function (options) {
    this.id         = options.id;
    this.position   = options.position;
    this.className  = options.className;
    this.left       = event.clientX + 'px';
    this.top        = event.clientY + 'px';
    this.elem       = options.elem;
    this.keypress   = options.keypress;
    this.background = options.background;
    this.width      = options.width + 'px';
    this.height     = options.height + 'px';
    this.radius     = options.radius + '%';
    this.opacity    = options.opacity;

    this.dotAnimation();
};

Dot.prototype.dotAnimation = function (event)
{
    try {
        if (event.preventDefault()) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    } catch (event) {

        var dot = document.createElement(this.elem);

        if(isIE() && isIE() < 9) {

            dot.setAttribute('class', this.className);
            dot.setAttribute('id', this.id);
            dot.setAttribute('position', this.position);
            dot.setAttribute('left', this.left);
            dot.setAttribute('top', this.top);
            dot.setAttribute('background', this.background);
            dot.setAttribute('width', this.width);
            dot.setAttribute('height', this.height);
            dot.setAttribute('opacity', this.opacity);
            dot.setAttribute('border-radius', this.radius);

        } else {

            dot.id = this.id;
            dot.className = this.className;
            dot.style.position = this.position;
            dot.style.left = this.left;
            dot.style.top = this.top;
            dot.style.background = this.background;
            dot.style.width = this.width;
            dot.style.height = this.height;
            dot.style.borderRadius = this.radius;
            dot.style.opacity = this.opacity;

        }

        document.body.appendChild(dot);
    }

    setTimeout(function ()
    {
        try {
            document.body.removeChild(dot);
        } catch(event) {
            return false;
        }

    }, 3000);

};
