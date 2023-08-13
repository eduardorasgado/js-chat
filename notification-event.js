const { ipcMain, Notification } = require("electron");

const loadEvents = () => {
  // _ is the event, but we are not using it
  ipcMain.on('notify', (_, message) => {
    new Notification({
      title: 'Notification',
      body: message
    }).show();
  });
}

module.exports = {
  loadEvents
}