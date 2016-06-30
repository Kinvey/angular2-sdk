'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpMiddleware = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _middleware = require('kinvey-javascript-sdk-core/dist/rack/middleware');

var _http = require('@angular/http');

var _parseHeaders = require('parse-headers');

var _parseHeaders2 = _interopRequireDefault(_parseHeaders);

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line no-unused-vars

var HttpMiddleware = exports.HttpMiddleware = function (_KinveyMiddleware) {
  _inherits(HttpMiddleware, _KinveyMiddleware);

  _createClass(HttpMiddleware, null, [{
    key: 'parameters',

    // Angular2 DI
    get: function get() {
      return [[_http.Http]];
    }
  }]);

  function HttpMiddleware(http) {
    _classCallCheck(this, HttpMiddleware);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HttpMiddleware).call(this, 'Angular2 Http Middleware'));

    _this.http = http;
    return _this;
  }

  _createClass(HttpMiddleware, [{
    key: 'handle',
    value: function () {
      var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(request) {
        var url, method, rawHeaders, body, headers, options, response;
        return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(Object.getPrototypeOf(HttpMiddleware.prototype), 'handle', this).call(this, request);

              case 2:

                // Create the request options
                url = request.url;
                method = request.method;
                rawHeaders = request.rawHeaders;
                body = request.body;
                headers = new _http.Headers(rawHeaders.toJSON());
                options = new _http.RequestOptions({
                  method: method,
                  headers: headers,
                  body: body
                });

                // Send the request

                _context.next = 10;
                return this.http.request(url, options).toPromise();

              case 10:
                response = _context.sent;


                // Set the response on the request
                request.response = {
                  statusCode: response.status,
                  headers: (0, _parseHeaders2.default)(response.headers.toJSON()),
                  data: response.json()
                };

                // Return the request
                return _context.abrupt('return', request);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handle(_x) {
        return _ref.apply(this, arguments);
      }

      return handle;
    }()
  }]);

  return HttpMiddleware;
}(_middleware.KinveyMiddleware);