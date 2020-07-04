(function (global, underfined) {
    var TelerikDemo = global.TelerikDemo = {};
 
    TelerikDemo.ResetPage = function (sender, args) {
        window.location.reload();
    };
})(window);

//Responsivo
function shouldMakeAdaptiveRadWindow() {
    //true si el menos a 768
    return Telerik.Web.BrowserFeatures.touchEvents && $telerik.$(window).width() < 768;
}

function AdaptarRadWindowMobile(sender, args) {
    if (shouldMakeAdaptiveRadWindow()) {
        //leave only the close button
        sender.set_behaviors(Telerik.Web.UI.WindowBehaviors.Close);
        sender.set_visibleStatusbar(false);
        //maximize so it takes up the entire viewport and reacts to size changes
        sender.maximize();
    }
}


//Dejar el radwindow al centro
function setCustomPosition(sender, args) {
    AdaptarRadWindowMobile(sender, args);

    if (!sender.isPinned())
        sender.togglePin();
}

