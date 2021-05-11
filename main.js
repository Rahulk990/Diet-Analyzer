const { app, BrowserWindow, Tray, Menu } = require('electron')
const path = require('path')

let mainWindow, tray;
let isQuiting = false;

function createTray(iconPath) {

  tray = new Tray(iconPath)
  tray.setToolTip('Diet Analyzer')
  tray.on('double-click', () => { mainWindow.show() })

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Quit', click: () => {
        isQuiting = true
        app.quit()
      }
    }
  ])

  tray.setContextMenu(contextMenu)
}

function createWindow() {

  const path = require('path');
  const iconPath = path.join(__dirname, 'assets/food.jpg');
  console.log(iconPath);

  // Basic Methods
  mainWindow = new BrowserWindow({
    width: 1000, height: 800,
    minWidth: 800, minHeight: 600,
    webPreferences: { nodeIntegration: true },
    icon: iconPath,
    title: "Diet Analyzer"
  })
  mainWindow.loadFile('./dist/Diet-Analyzer/index.html')
  mainWindow.on('closed', () => { mainWindow = null })

  // Setting NULL MenuBar
  mainWindow.setMenu(null);

  // Creating Tray
  createTray(iconPath)

  // Configuring Options
  mainWindow.on('minimize', (event) => {
    event.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on('close', (event) => {
    if (!isQuiting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})