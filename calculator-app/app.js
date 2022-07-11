/*
-Travis Rosen
-7/09/2022
-app.js
-Server file
*/

/*
-Require statements
*/

const url = require('url');
const { app, BrowserWindow } = require('electron');
const path = require('path');


/*
-API Routes
*/

/*
Creating browser app through electron
*/

//global reference of window object
let win;

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  })

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/calculator-app/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  win.webContents.on('did-fail-load', () => win.loadURL(
    url.format({
      pathname:  path.join(__dirname, `/dist/calculator-app/index.html`),
      protocol: "file:",
      slashes: true
    })
  ))
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (win === null) createWindow()
});

