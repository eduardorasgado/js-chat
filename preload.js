const { ipcRenderer, contextBridge } = require('electron');

// secure way to communicate between main and renderer processes
contextBridge.exposeInMainWorld('processApi', {
  notification: {
    sendNotification: (message) => {
      ipcRenderer.send('notify', message);
    }
  },
  dummyAttr: 1000
});

// still insecure since we turned off the context isolation feature in createWindow function's web preferences
/* window.sendNotification = (message) => {
    ipcRenderer.send('notify', message);
} */