const { ipcMain, dialog, shell, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const EventEmitter = require("events");
class MainEvent extends EventEmitter {}
const mainEvent = new MainEvent();


function onBrowserWindowCreated(window) {

}

module.exports = {
  onBrowserWindowCreated,
};