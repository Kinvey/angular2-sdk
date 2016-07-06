'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HttpMiddleware = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _middleware = require('kinvey-javascript-sdk-core/dist/rack/middleware');

var _core = require('@angular/core');

var _http = require('@angular/http');

var _es6Promise = require('es6-promise');

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _es6Promise.Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _es6Promise.Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line no-unused-vars

var FakeXSRFStrategy = function (_XSRFStrategy) {
  _inherits(FakeXSRFStrategy, _XSRFStrategy);

  function FakeXSRFStrategy() {
    _classCallCheck(this, FakeXSRFStrategy);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FakeXSRFStrategy).apply(this, arguments));
  }

  _createClass(FakeXSRFStrategy, [{
    key: 'configureRequest',
    value: function configureRequest() {/* */}
  }]);

  return FakeXSRFStrategy;
}(_http.XSRFStrategy);

var XRSF_STRATEGY = (0, _core.provide)(_http.XSRFStrategy, { useValue: new FakeXSRFStrategy() });

var HttpMiddleware = exports.HttpMiddleware = function (_KinveyMiddleware) {
  _inherits(HttpMiddleware, _KinveyMiddleware);

  function HttpMiddleware() {
    _classCallCheck(this, HttpMiddleware);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HttpMiddleware).call(this, 'Angular2 Http Middleware'));
  }

  _createClass(HttpMiddleware, [{
    key: 'handle',
    value: function () {
      var _ref = _asyncToGenerator(_regeneratorRuntime2.default.mark(function _callee(request) {
        return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _get(Object.getPrototypeOf(HttpMiddleware.prototype), 'handle', this).call(this, request);

              case 2:
                return _context.abrupt('return', new _es6Promise.Promise(function (resolve, reject) {
                  // Create the request options
                  var url = request.url;
                  var method = request.method;
                  var headers = request.headers;
                  var body = request.body;

                  var ng2Headers = new _http.Headers(headers.toJSON());
                  var options = new _http.RequestOptions({
                    method: method,
                    headers: ng2Headers,
                    body: body
                  });

                  // Send the request
                  var http = _core.ReflectiveInjector.resolveAndCreate([].concat(_toConsumableArray(_http.HTTP_PROVIDERS), [XRSF_STRATEGY])).get(_http.Http);
                  var observable = http.request(url, options);
                  observable.subscribe(function (response) {
                    var headers = {};
                    var headerKeys = response.headers.keys();

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                      for (var _iterator = headerKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;

                        headers[key] = response.headers.get(key);
                      }

                      // Set the response on the request
                    } catch (err) {
                      _didIteratorError = true;
                      _iteratorError = err;
                    } finally {
                      try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                          _iterator.return();
                        }
                      } finally {
                        if (_didIteratorError) {
                          throw _iteratorError;
                        }
                      }
                    }

                    request.response = {
                      statusCode: response.status,
                      headers: headers,
                      data: response.text()
                    };
                  }, function (error) {
                    reject(error);
                  }, function () {
                    resolve(request);
                  });
                }));

              case 3:
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