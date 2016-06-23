(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'kefir-bus', 'ramda'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('kefir-bus'), require('ramda'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.kefirBus, global.ramda);
        global.kefirBusify = mod.exports;
    }
})(this, function (exports, _kefirBus, _ramda) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _kefirBus2 = _interopRequireDefault(_kefirBus);

    var _ramda2 = _interopRequireDefault(_ramda);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    var busify = function busify(actionNames) {
        if (_ramda2.default.is(String)(actionNames)) {
            return _defineProperty({}, actionNames, new _kefirBus2.default());
        }
        if (_ramda2.default.isArrayLike(actionNames)) {
            return _ramda2.default.pipe(_ramda2.default.map(busify), _ramda2.default.mergeAll)(actionNames);
        }
        if (_ramda2.default.is(Object)(actionNames)) {
            return _ramda2.default.map(busify)(actionNames);
        }
    };

    exports.default = busify;
});
