const EventEmitter = require("events");
const { join } = require("path");
const { existsSync, mkdirSync } = require("fs");
const defaultConfig = require("../defaultConfig/defaultConfig.json");
const loadOptions = require("./loadOptions");
const pluginDataPath = LiteLoader.plugins.lite_tools.path.data;
const settingsPath = join(pluginDataPath, "settings.json");
if (!existsSync(pluginDataPath)) {
  mkdirSync(pluginDataPath, { recursive: true });
}
const options = loadOptions(defaultConfig, settingsPath);

console.log("配置加载完成", options);

function updateOptions() {
  return "testFunc";
}

export { options, updateOptions };
