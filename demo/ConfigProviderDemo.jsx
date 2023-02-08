/**
 * ConfigProvider Component Demo for uxcore
 * @author fanyixuan.fyx
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import ConfigProvider from '../src';
import Button from 'uxcore-button';
import Dialog from 'uxcore-dialog';
import '../style';

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initDialogVisible: false,
      localeDialogVisible: false
    };
  }

  openDialog(paramName) {
    this.setState({ [paramName]: true });
  }

  closeDialog(paramName) {
    this.setState({ [paramName]: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.openDialog.bind(this, 'initDialogVisible')}>原始Dialog语言包</Button>
        <Dialog
          title="默认语言包"
          content="内容"
          onOk={this.closeDialog.bind(this, 'initDialogVisible')}
          onCancel={this.closeDialog.bind(this, 'initDialogVisible')}
          visible={this.state.initDialogVisible}
        >
          <div>123</div>
        </Dialog>
        <br />
        <br />
        <Button onClick={this.openDialog.bind(this, 'localeDialogVisible')}>传入自定义语言包Dialog</Button>
        <ConfigProvider localePack={{
          Dialog: {
            ok: '自定义'
          }
        }}>
          <Dialog
            visible={this.state.localeDialogVisible}
            title="自定义语言包"
            onOk={this.closeDialog.bind(this, 'localeDialogVisible')}
            onCancel={this.closeDialog.bind(this, 'localeDialogVisible')}
          >
            <div>123</div>
          </Dialog>
        </ConfigProvider>
      </div>
    );
  }
}

export default Demo;
