import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { imageUrl, APIKEY } from './constants';

import ListItem from './components/ListItem';
import Toolbar from './components/Toolbar';
import Modal from './components/Modal';

const styles = {
  root: {
    fontFamily: "Roboto",
  },
  body: {
    flex: 1,
    padding: '20px 40px',
    background: 'black',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  movie: {
    display: 'flex'
  },
}

function App() {
  const [data, setData] = useState();
  const [modalIsOpen, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&sort_by=release_date.desc&primary_release_year=2019&vote_count.gte=10`);
      setData(_.filter(data.results, movie => movie.popularity > 10));
    };
    fetchData();
  }, []);

  const openModal = (id) => {
    setOpenModal(true);
    setSelectedMovie(id);
  }

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <div style={styles.root}>
      <Toolbar />
      <div style={styles.body}>
        <div style={styles.content}>
          {data && _.map(data, movie => {
            const { id, title, poster_path, overview, genre_ids, backdrop_path } = movie;
            const movieImg = backdrop_path ? backdrop_path : poster_path;
            
            return (
              <div style={styles.movie}>
                <ListItem
                  key={id} 
                  name={title}
                  imageUrl={imageUrl+poster_path}
                  onClick={()=> openModal(id)}
                />
                {modalIsOpen && selectedMovie === id && 
                  <Modal
                    closeModal={closeModal}
                    imageUrl={imageUrl + movieImg}
                    title={title}
                    details={overview}
                    movieId={id}
                  />
                }
              </div>
          )})}
        </div>
      </div>
    </div>
  );
}

export default App;
