import React, { Component } from 'react';
import HttpStatus from 'http-status-codes';

export default class Index extends Component {
  static async getInitialProps(ctx) {
    const codeResponse =
      ctx && ctx.res && ctx.res.statusCode ? ctx.res.statusCode : 417;
    const statusTextDefault = HttpStatus.getStatusText(codeResponse);

    return { codeResponse, statusTextDefault };
  }

  render() {
    const { codeResponse, statusTextDefault } = this.props;
    return (
      <>
        <div id="error-notfound">
          <p>
            <span>{codeResponse}</span>
            {statusTextDefault}
          </p>
        </div>
      </>
    );
  }
}
