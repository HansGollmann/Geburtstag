///<reference types="jquery" />
///<reference types="jqueryui" />
var Geburtstag = /** @class */ (function () {
    function Geburtstag() {
        this.init();
    }
    Geburtstag.prototype.init = function () {
        $('div.tabs').tabs();
    };
    return Geburtstag;
}());
