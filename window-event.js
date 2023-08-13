const { app } = require("electron");
const { createWindow } = require('./window-configuration');

function loadEvents() {
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
}

module.exports = {
  loadEvents
}