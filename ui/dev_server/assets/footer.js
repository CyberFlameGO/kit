document.addEventListener("DOMContentLoaded", function() {
    setLinkToApp();
})

/**
 * If the user is using a mobile device, this sets the link to the app to either
 * the Android Play Store or the Apple App Store depending on the operating system of
 * the device. If it's an unknown OS, the link is hidden.
 */
 function setLinkToApp() {
    var linkEl = document.getElementById('appLink');
    var osIconEl = document.getElementById('osIcon');
    if (!linkEl || !osIconEl ) {
        return;
    }
    var os = getMobileOperatingSystem();
    switch(os) {
        case "Android":
            linkEl.setAttribute('href', 'https://play.google.com/store/apps/details?id=nz.org.geonet.quake&hl=en');
            osIconEl.classList = 'fa fa-android fa-1';
            break;
        case "iOS":
            linkEl.setAttribute('href', 'https://itunes.apple.com/nz/app/geonet-quake/id533054360?mt=8');
            osIconEl.classList = 'fa fa-apple fa-1';
            break;
        default:
            linkEl.style.visibility="hidden";
            osIconEl.style.visibility="hidden";
            break;
    }
};

 /** Determines the mobile OS, returning 'iOS', 'Android', or 'unknown'.
 * @returns {String} */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}