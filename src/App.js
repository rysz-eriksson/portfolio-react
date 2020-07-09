import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import PortfolioContainer from './components/PortfolioContainer'
import IconsPanel from './components/IconsPanel'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#372549'
    }
  },
  typography: {
    h4: {
      fontFamily: "Playfair Display",
      fontWeight: "bold"
    },
    h6: {
      fontFamily: "Poppins",
    },
    body2: {
      fontFamily: "Poppins",
    },
  }
})

function App() {
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <IconsPanel />
        <Container maxWidth="md">
          <Header/>
          <PortfolioContainer />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
