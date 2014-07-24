//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "anabatic",
    appName: "anabatic",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.153",
    serverPort: "8090",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    url: "http://192.168.0.153:8090/middleware/MWServlet",
    secureurl: "http://192.168.0.153:8090/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializekeywordPageFooter();
    frmBalanceEquiryGlobals();
    frmFundTransferGlobals();
    menuGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            menu.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};