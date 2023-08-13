function isDevelopment(app) {
  if (app != null && app != undefined)
    return !app.packaged
}

module.exports = {
  isDevelopment
}