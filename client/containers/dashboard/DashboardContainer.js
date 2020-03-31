import React, { Component } from 'react';

// Import custom components
import Dashboard from '../../components/dashboard/Dashboard';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Dashboard />;
  }
}

export default DashboardContainer;
