import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer'


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <PortfolioContainer />
      </Container>
    </React.Fragment>
  );
}

export default App;
