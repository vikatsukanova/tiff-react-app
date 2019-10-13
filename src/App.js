import React from 'react';
import logo from './logo.svg';

import ListItem from './components/ListItem';
import Toolbar from './components/Toolbar';

const styles = {
  root: {
    fontFamily: "Roboto"
  },
  body: {
    flex: 1,
    padding: '20px 40px',
  },
}

function App() {
  return (
    <div style={styles.root}>
      <Toolbar />
      <div style={styles.body}>
        <ListItem
          imageUrl
          name="name"
        />
      </div>
    </div>
  );
}

export default App;
