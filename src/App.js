import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer'
import IconsPanel from './components/IconsPanel'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <IconsPanel />
      <Container maxWidth="md">
        <Header />
        <PortfolioContainer />
      </Container>
    </React.Fragment>
  );
}

export default App;
