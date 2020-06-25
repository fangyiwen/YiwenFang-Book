/* eslint "react/prefer-stateless-function": "off" */

import React from 'react';
import { Link } from 'react-router-dom';

export default class IssueFilter extends React.Component {
  render() {
    return (
      <div>
        <Link to={{ pathname: '/issues', search: '?status=New' }}>
          New Issues
        </Link>
        {' | '}
        <a href="/#/issues?status=New">New Issues</a>
        {' | '}
        <Link to={{ pathname: '/issues', search: '?status=Assigned' }}>
          Assigned Issues
        </Link>
      </div>
    );
  }
}
