/*!
 * KRICT Spectra Viewer (https://github.com/KRICT/krict-spectra-viewer/)
 * Copyright 2021 The KRICT Authors (https://github.com/KRICT/krict-spectra-viewer/graphs/contributors)
 * Licensed under MIT (https://github.com/KRICT/krict-spectra-viewer/blob/main/LICENSE)
 */

const { app, dialog, globalShortcut } = require("electron");

app.on("ready", () => {
  globalShortcut.register("CommandOrControl+Alt+K", () => {
    dialog.showMessageBox({
      type: "info",
      message: "Success!",
      detail: "You pressed the registered global shortcut keybinding.",
      buttons: ["OK"],
    });
  });
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});
