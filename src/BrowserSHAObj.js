/*
 * [BrowserSHAObj]{@link https://github.com/UmamiAppearance/BrowserSHAObj}
 * esm-module with relative import
 */

import {BaseEx} from "../lib/BaseEx/src/BaseEx.js";
import SHAObj from "./main.js"

SHAObj.prototype.baseEx = new BaseEx("bytes");

export default SHAObj
