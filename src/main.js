const { ipcMain, dialog, shell, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const { options, updateOptions } = require("./main_modules/option");

function onBrowserWindowCreated(window) {
  try {

  } catch (err) {
    alert(err.message);
  }
}

module.exports = {
  onBrowserWindowCreated,
};
