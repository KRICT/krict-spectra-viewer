/*!
  * KRICT Spectra Viewer (https://github.com/KRICT/krict-spectra-viewer/)
  * Copyright 2021 The KRICT Authors (https://github.com/KRICT/krict-spectra-viewer/graphs/contributors)
  * Licensed under MIT (https://github.com/KRICT/krict-spectra-viewer/blob/main/LICENSE)
  */

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {getCurrentWindow, globalShortcut} = require('electron').remote;

var reload = ()=>{
    getCurrentWindow().reload()
}

globalShortcut.register('F5', reload);
// here is the fix bug #3778, if you know alternative ways, please write them
window.addEventListener('beforeunload', ()=>{
    globalShortcut.unregister('F5', reload);
})