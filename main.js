const { app, Menu, Tray, BrowserWindow, systemPreferences } = require('electron')
const path = require('path')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    show: false,
    backgroundColor: `${systemPreferences.isDarkMode() ? '#292929' : 'f7f7f7'}`,
    width: 600,
    height: 450,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  // // create menu
  // let menu = Menu.buildFromTemplate([
  //   {
  //     label: 'Menu',
  //     submenu: [
  //         {label:'Adjust Notification Value'},
  //         {label:'CoinMarketCap'},
  //         {type:'separator'},
  //         {label:'Exit'}
  //     ]
  //   },{
  //     label: 'API',
  //     submenu: [
  //       {
  //         label:'Disable API',
  //         checked: true,
  //         click() {
  //           console.log('clicked api option')
  //         }
  //       }
  //     ]
  //   }
  // ])
  // Menu.setApplicationMenu(menu); 

  // wait until ready to prevent FOUC
  win.once('ready-to-show', () => {
    win.show()
  })

  // and load the index.html of the app.
  win.loadFile('src/index.html')

  // Open the DevTools. (commented out)
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  //createTray()
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.