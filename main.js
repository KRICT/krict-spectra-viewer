/*!
 * KRICT Spectra Viewer (https://github.com/KRICT/krict-spectra-viewer/)
 * Copyright 2021 The KRICT Authors (https://github.com/KRICT/krict-spectra-viewer/graphs/contributors)
 * Licensed under MIT (https://github.com/KRICT/krict-spectra-viewer/blob/main/LICENSE)
 */

// Modules to control application life and create native browser window
const path = require("path");
const glob = require("glob");
const { app, BrowserWindow } = require("electron");
const electron = require("electron");
const debug = /--debug/.test(process.argv[2]);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

function getDefaultScreenSize(theScreenElectron) {
  var theMainScreen = theScreenElectron.getPrimaryDisplay();
  var theDimesions = theMainScreen.size;
  var theWidth = theDimesions.width;

  if (theWidth >= 1440) {
    return [1440, 1080];
  } else if (theWidth >= 1280) {
    return [1280, 960];
  } else if (theWidth >= 1024) {
    return [1024, 768];
  } else {
    return [800, 600];
  }
}

function createWindow() {
  // Create the browser window.
  const theElectronScreen = electron.screen;
  let theDefaultSize = getDefaultScreenSize(theElectronScreen);
  mainWindow = new BrowserWindow({
    width: theDefaultSize[0],
    height: theDefaultSize[1],
  });
  //mainWindow.maximize();

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Launch fullscreen with DevTools open, usage: npm run debug
  if (debug) {
    mainWindow.webContents.openDevTools();
    mainWindow.maximize();
    //require('devtron').install();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

loadDemos();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Require each JS file in the main-process dir
function loadDemos() {
  const files = glob.sync(path.join(__dirname, "main-process/**/*.js"));
  files.forEach((file) => {
    require(file);
  });
}
