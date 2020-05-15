import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';

export default function () {
  return (
      <Typography variant="body2" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}{' '}
          <FormattedMessage id='company'/>{' '}<FormattedMessage id='copyright'/>
      </Typography>
  );
}
