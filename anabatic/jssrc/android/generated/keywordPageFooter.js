//Template File
function keywordPageFooter_vbxLeftFooter_onClick_seq0(eventobject) {
    paginationPrevious.call(this);
};

function keywordPageFooter_vbxRightFooter_onClick_seq0(eventobject) {
    paginationNext.call(this);
};

function initializekeywordPageFooter() {
    hbxFooterPage = new kony.ui.BoxTemplate({
        "id": "hbxFooterPage",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "addWidgets": addWidgetshbxFooterPage
    }, {
        "containerWeight": 11,
        "percent": true,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
        "margin": [0, 0, 0, 0],
        "padding": [0, 2, 0, 2],
        "vExpand": false,
        "marginInPixel": false,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {});

    function addWidgetshbxFooterPage() {
        var imgLeftfooter = new kony.ui.Image2({
            "id": "imgLeftfooter",
            "isVisible": true,
            "src": "arwleftd.png",
            "imageWhenFailed": "arwleftd.png",
            "imageWhileDownloading": "trans1.png"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var hbxLeftFooter = new kony.ui.Box({
            "id": "hbxLeftFooter",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbxLeftFooter.add(
        imgLeftfooter);
        var vbxLeftFooter = new kony.ui.Box({
            "id": "vbxLeftFooter",
            "isVisible": true,
            "onClick": keywordPageFooter_vbxLeftFooter_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 35,
            "margin": [4, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxLeftFooter.add(
        hbxLeftFooter);
        var lblFrom = new kony.ui.Label({
            "id": "lblFrom",
            "isVisible": true,
            "text": null,
            "skin": "lblNormal"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_TOP_RIGHT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 39
        }, {});
        var lblOf = new kony.ui.Label({
            "id": "lblOf",
            "isVisible": true,
            "text": "of",
            "skin": "lblNormal"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [3, 0, 3, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "marginInPixel": true,
            "paddingInPixel": false,
            "containerWeight": 22
        }, {});
        var lblTo = new kony.ui.Label({
            "id": "lblTo",
            "isVisible": true,
            "text": null,
            "skin": "lblNormal"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_CENTER,
            "vExpand": false,
            "hExpand": true,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 38
        }, {});
        var hbxIndexFooter = new kony.ui.Box({
            "id": "hbxIndexFooter",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbxIndexFooter.add(
        lblFrom, lblOf, lblTo);
        var vbxIndexFooter = new kony.ui.Box({
            "id": "vbxIndexFooter",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 29,
            "margin": [0, 0, 0, 0],
            "padding": [1, 1, 1, 1],
            "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxIndexFooter.add(
        hbxIndexFooter);
        var imgRightfooter = new kony.ui.Image2({
            "id": "imgRightfooter",
            "isVisible": true,
            "src": "arwrightd.png",
            "imageWhenFailed": "trans1.png",
            "imageWhileDownloading": "trans1.png"
        }, {
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "referenceWidth": null,
            "referenceHeight": null,
            "marginInPixel": false,
            "paddingInPixel": false,
            "containerWeight": 100
        }, {});
        var hbxRightFooter = new kony.ui.Box({
            "id": "hbxRightFooter",
            "isVisible": true,
            "orientation": constants.BOX_LAYOUT_HORIZONTAL
        }, {
            "containerWeight": 100,
            "percent": true,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "margin": [0, 0, 0, 0],
            "padding": [0, 0, 0, 0],
            "vExpand": false,
            "marginInPixel": false,
            "paddingInPixel": false,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        hbxRightFooter.add(
        imgRightfooter);
        var vbxRightFooter = new kony.ui.Box({
            "id": "vbxRightFooter",
            "isVisible": true,
            "onClick": keywordPageFooter_vbxRightFooter_onClick_seq0,
            "orientation": constants.BOX_LAYOUT_VERTICAL
        }, {
            "containerWeight": 36,
            "margin": [0, 0, 4, 0],
            "padding": [0, 0, 0, 0],
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
            "marginInPixel": false,
            "paddingInPixel": false,
            "vExpand": false,
            "hExpand": true,
            "layoutType": constants.CONTAINER_LAYOUT_BOX
        }, {});
        vbxRightFooter.add(
        hbxRightFooter);
        hbxFooterPage.add(
        vbxLeftFooter, vbxIndexFooter, vbxRightFooter);
    }
};