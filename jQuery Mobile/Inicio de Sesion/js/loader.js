$(document).on("mobileinit", function() {
    $.mobile.loader.prototype.options.text = "Conectando...";
    $.mobile.loader.prototype.options.textVisible = true;
    $.mobile.loader.prototype.options.textonly = false;
    $.mobile.loader.prototype.options.theme = "e";
    $.mobile.loader.prototype.options.html = "";
});