const electron = require("electron");

const path = require("path");
const fs = require("fs");

const {
  app,
  BrowserWindow
} = electron;

let isInstallerRunning = false;
const isDevelopmentMode = require("electron-is-dev");

var mainWindow = null;
var mainWindowIsMinimized = false;

var mainMenu = null;

var isFocusMode = false;
var isApplicationReady = false;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(isDevelopmentMode ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`);

  if (isDevelopmentMode) {
    mainWindow.webContents.openDevTools({
      mode: "detach"
    });
  };
};

app.on("ready", () => {
  isApplicationReady = true;
  return createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  };
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    isApplicationReady = true;
    createWindow();
  };
});
