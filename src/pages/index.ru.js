import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import Layout from "../layout/layout";

export default function IndexPage(props) {

  return (
    <Layout location={props.location}>
     <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
           Пример страницы v4-beta
        </Typography>
        <Link to='/ru/products/' color="secondary">
          На страницу продуктов компании
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Layout>
  );
}
