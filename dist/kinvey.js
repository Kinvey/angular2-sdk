'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kinvey = undefined;

var _kinveyPhonegapSdk = require('kinvey-phonegap-sdk');

var _device = require('./device');

var _popup = require('./popup');

// Add Modules
_kinveyPhonegapSdk.Kinvey.Device = _device.Device;
_kinveyPhonegapSdk.Kinvey.Popup = _popup.Popup;

// Export
exports.Kinvey = _kinveyPhonegapSdk.Kinvey;