/*!
 * KRICT Spectra Viewer (https://github.com/KRICT/krict-spectra-viewer/)
 * Copyright 2021 The KRICT Authors (https://github.com/KRICT/krict-spectra-viewer/graphs/contributors)
 * Licensed under MIT (https://github.com/KRICT/krict-spectra-viewer/blob/main/LICENSE)
 */

let theMainContainer = {
    id: "main_container",
    type: "clean",
    rows: [
        {
            view: "toolbar",
            elements: [
                {
                    view: "icon",
                    icon: "mdi mdi-menu",
                    click: function () { },
                },
                {
                    view: "label",
                    label: "<b>[ KRICT Spectra Viewer ]</b>",
                },
                {},
                { view:'icon', icon: "mdi mdi-cog-outline" },
                /*{
                    view: "button",
                    value: "Button test",
                    css: "webix_primary",
                    width: 125,
                    inputWidth: 125,
                },*/
            ],
        },
        {
            type: "clean",
            cols: [
                {
                    rows: [
                        {
                            view: "sidebar",
                            width: 225,
                            titleHeight: 75,
                            data: [
                                {
                                    id: "main-menu-dashboard",
                                    icon: "mdi mdi-view-dashboard",
                                    value: "Menu example",
                                    data: [
                                        { id: "menu-example-1", value: "Sub menu example 1" },
                                        { id: "menu-example-2", value: "Sub menu example 2" },
                                    ],
                                },
                                { id: "demo", icon: "mdi mdi-book", value: "Documentation" },
                            ],
                        },
                    ],
                },
                {
                    rows:[
                        {template:"<div id='content_container'>Content container</div>"}
                    ]
                }
            ],
        },
    ],
};

webix.ready(function () {
    webix.ui(theMainContainer);
});
