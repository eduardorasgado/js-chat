const { BrowserWindow, screen } = require("electron");
const path = require('path');

const loadReloadModule = () => {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  });
}
const getWindowSize = () => {
  return screen.getPrimaryDisplay().workAreaSize;
}

const createWindow = (isDevelopment) => {
  const windowSize = getWindowSize();

  // Browser Window <- renderer process
  const window = new BrowserWindow({
    width: windowSize.width,
    height: windowSize.height,

    backgroundColor: "white",

    webPreferences: {
      nodeIntegration: false,
      // it ensures that both your preload scripts and electron internal logic runs in separate context
      // enabled by default
      contextIsolation: true,
      devTools: isDevelopment,

      preload: path.join(__dirname, 'preload.js')
    }
  });

  window.loadFile("./src/client/index.html");

  if (isDevelopment) {
    window.webContents.openDevTools();
  }
}

module.exports = {
  createWindow,
  loadReloadModule
}