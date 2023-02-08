/**
 * ConfigProvider Component for uxcore
 * @author fanyixuan.fyx
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ConfigProvider extends React.Component {
  static displayName = 'ConfigProvider';

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    localePack: PropTypes.object
  };

  static defaultProps = {
    prefixCls: 'uxcore-config-provider',
    className: '',
    localePack: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getChildContext() {
    return { localePack: this.props.localePack };
  }

  render() {
    return this.props.children
  }
}

ConfigProvider.childContextTypes = {
  localePack: PropTypes.object
}

export default ConfigProvider;

