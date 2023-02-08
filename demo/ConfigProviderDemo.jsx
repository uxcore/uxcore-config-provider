/**
 * ConfigProvider Component Demo for uxcore
 * @author fanyixuan.fyx
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import ConfigProvider from '../src';
import '../style';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ConfigProvider />
      </div>
    );
  }
}

export default Demo;
