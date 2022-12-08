import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/App";

const _XHR = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

XMLHttpRequest = _XHR;
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

AppRegistry.registerComponent(appName, () => App);
