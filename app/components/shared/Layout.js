import { Component } from 'react';
import Head from 'next/head'

class Layout extends Component {
  render() { 
    return (
      <div>
        <Head>
          <title>Traffic Cam</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        {this.props.children}
      </div>
    );
  }
}
 
export default Layout;