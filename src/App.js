import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ListItem from './components/ListItem';
import Toolbar from './components/Toolbar';

const APIKEY = process.env.REACT_APP_API_KEY;

const styles = {
  root: {
    fontFamily: "Roboto"
  },
  body: {
    flex: 1,
    padding: '20px 40px',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async() => {
      const results = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=release_date.desc&primary_release_year=2019&vote_count.gte=10`);
      setData(results.data.results);
      console.log(results.data.results)
    };
    fetchData();
  }, []);

  return (
    <div style={styles.root}>
      <Toolbar />
      <div style={styles.body}>
        <div style={styles.content}>
          {data && data.map(movie => (
            <ListItem
              key={movie.id} 
              name={movie.title}
              imageUrl={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
