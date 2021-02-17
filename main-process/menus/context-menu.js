/*!
 * KRICT Spectra Viewer (https://github.com/KRICT/krict-spectra-viewer/)
 * Copyright 2021 The KRICT Authors (https://github.com/KRICT/krict-spectra-viewer/graphs/contributors)
 * Licensed under MIT (https://github.com/KRICT/krict-spectra-viewer/blob/main/LICENSE)
 */

const { BrowserWindow, Menu, MenuItem, ipcMain, app } = require("electron");

const menu = new Menu();
menu.append(new MenuItem({ label: "Hello" }));
menu.append(new MenuItem({ type: "separator" }));
menu.append(
  new MenuItem({ label: "Electron", type: "checkbox", checked: true })
);

app.on("browser-window-created", (event, win) => {
  win.webContents.on("context-menu", (e, params) => {
    menu.popup(win, params.x, params.y);
  });
});

ipcMain.on("show-context-menu", (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  menu.popup(win);
});
