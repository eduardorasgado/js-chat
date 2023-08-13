/**
 * ELECTRON APPLICATION ENTRYPOINT
 */
// Main process
const { app } = require("electron");
const { isDevelopment } = require("./utils");
const { createWindow, loadReloadModule } = require('./window-configuration');
const windowEvent = require('./window-event');
const notificationEvent = require('./notification-event');

if(isDevelopment(app)){
    loadReloadModule();
}

app.whenReady().then(() => {
    createWindow(isDevelopment(app));
});

windowEvent.loadEvents();
notificationEvent.loadEvents();

// Chromium -> web engine for rendering the UI, full Chrome like browser
// V8 -> engine that provides capabilities to execute, run, javascript code in the browser

// webpack -> is a module builder, main purpose is to bundle JS files for usage in the browser
// Babel -> It is a javascript compiler