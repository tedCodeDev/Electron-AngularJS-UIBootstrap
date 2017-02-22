/*
 * File: main.js
 * Author: Theodore J. Mike
 * Created: 2/21/2017
 * Update: 2/21/2017
 * Description: main Electron file. Create and handle system events.
 * Notes: Based on http://electron.atom.io/docs/tutorial/quick-start/
*/

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // create browser window
  // for all options, see http://electron.atom.io/docs/api/browser-window/
  win = new BrowserWindow({
    name: "boilerplate",
    width: 1024,
    height: 768,
    icon: "app/images/icon.png"
  });

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // remove menu
  //win.setMenu(null);

  // Open the DevTools.
  //win.webContents.openDevTools()

  // clean up when window closed
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// quit when all windows closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if(win === null){
    createWindow();
  }
});
