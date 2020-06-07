import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        {/*<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"*/}
        {/*      rel="stylesheet" />*/}
      </Helmet>
        {props.children}
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
