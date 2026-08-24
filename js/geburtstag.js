///<reference types="jquery" />
///<reference types="jqueryui" />
var Geburtstag = /** @class */ (function () {
    function Geburtstag() {
        this.init();
    }
    Geburtstag.prototype.init = function () {
        var that = this;
        $('div.tabs').tabs({
            active: false,
            heightStyle: "content",
            collapsible: true,
            activate: function (event, ui) { that.setBreite(); }
        });
        this.setBreite();
    };
    Geburtstag.prototype.setBreite = function () {
        $(document).ready(function () {
            var maxBreite = window.innerWidth * 0.4; // 40vw in Pixeln
            $('.left').each(function () {
                var container = $(this);
                var img = container.find('img.foto');
                function setzeBreite() {
                    var imgWidth = img.width();
                    if (imgWidth > 0) {
                        var neueBreite = Math.min(imgWidth, maxBreite);
                        container.width(neueBreite);
                        container.find('.imgText').width(neueBreite);
                    }
                }
                if (img[0].complete) {
                    setzeBreite();
                }
                else {
                    img.on('load', setzeBreite);
                }
            });
        });
    };
    return Geburtstag;
}());
