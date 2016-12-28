import React from 'react';
import Layout from '../../components/Layout';
import Capabilities from './Capabilities';

const title = 'Возможности';

export default {

  path: '/capabilities',

  action() {
    return {
      title,
      component: <Layout>
          <Capabilities title={title} />
        </Layout>,
    };
  },

};
