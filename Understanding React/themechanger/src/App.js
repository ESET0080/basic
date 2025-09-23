import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './component/ThemedComponent';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;