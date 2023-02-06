'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ConfigProvider Component for uxcore
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author fanyixuan.fyx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017-2018, Uxcore Team, Alinw.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ConfigProvider = function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider(props) {
    _classCallCheck(this, ConfigProvider);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    console.log(_this.props);
    _this.state = {};
    return _this;
  }

  ConfigProvider.prototype.getChildContext = function getChildContext() {
    return { localePack: this.props.localePack };
  };

  ConfigProvider.prototype.render = function render() {
    return this.props.children;
  };

  return ConfigProvider;
}(_react2["default"].Component);

ConfigProvider.displayName = 'ConfigProvider';
ConfigProvider.propTypes = {
  prefixCls: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  localePack: _propTypes2["default"].object
};
ConfigProvider.defaultProps = {
  prefixCls: 'uxcore-config-provider',
  className: '',
  localePack: undefined
};


ConfigProvider.childContextTypes = {
  localePack: _propTypes2["default"].object
};

exports["default"] = ConfigProvider;
module.exports = exports['default'];