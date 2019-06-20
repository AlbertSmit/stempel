const { app, BrowserWindow, systemPreferences, globalShortcut, ipcMain } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false, //was false
    backgroundColor: `${systemPreferences.isDarkMode() ? '#292929' : 'f7f7f7'}`,
    width: 600,
    height: 450,
    titleBarStyle: 'hidden',
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
        }
    });

    // wait until ready to prevent FOUC
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })

    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    if (isDev) {
        // Open the DevTools.
        //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
        mainWindow.webContents.openDevTools();
    }
    mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', () => {
    createWindow()
    globalShortcut.register('Cmd+,', () => {
        console.log('Cmd+Comma is pressed')
        mainWindow.webContents.send('ping', '/settings');
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});