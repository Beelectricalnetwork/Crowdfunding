import React from 'react';
import {ThemeProvider, CSSReset} from '@chakra-ui/core';

function App ()  {
  return(
    <ThemeProvider>
      <CSSReset/>
      <pLanding />
    </ThemeProvider>
  );
};

export default App;
