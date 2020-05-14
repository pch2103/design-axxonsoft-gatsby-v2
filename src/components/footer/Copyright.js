import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export function CopyrightEN() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {' '}
        <MuiLink color="inherit" href="https://www.axxonsoft.com/">
          AxxonSoft.
        </MuiLink>{' All rights reserved.'}
      </Typography>
  );
}

export function CopyrightRU() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {new Date().getFullYear()}
        {' '}
        <MuiLink color="inherit" href="https://www.itv.ru/">
          ITV | AxxonSoft.
        </MuiLink>{' Дизайн-группа.'}
      </Typography>
  );
}