import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { APIKEY } from '../constants';

import Typography from './Typography';

const styles = {
  modal: {
    background: 'white',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: '3% 20%',
    padding: 20,
    borderRadius: 2,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  imageContainer: {
    height: 280,
    margin: '15px 0px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
  },
  closeIcon: {
    cursor: 'pointer',
    textAlign: 'right',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
  },
  details: {
    maxHeight: 95,
    overflow: 'auto',
    margin: '10px 0',
  },
  genres: {
    display: 'flex',
  },
  pill : {
    border: '1px solid orange',
    borderRadius: 2,
    padding: 5,
    margin: '0px 5px',
    color: 'orange',
  }
}

export default function Modal(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async() => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${APIKEY}`);
      setData(data)
      console.log(data)
    };
    fetchData();
  }, []);

  return (
      data ? (
        <div style={styles.modal}>
          <div style={styles.closeIcon} onClick={props.closeModal}>X</div>
          <div style={styles.imageContainer}><img style={styles.image} src={props.imageUrl} alt={''}/></div>
          <Typography variant="body">{props.title}</Typography>
          <p>{data.tagline}</p>
          <div style={styles.modalContent}>
            <div style={styles.details}>{props.details}</div>
            <p>Runtime: {data.runtime}</p>
            <div style={styles.genres}>
              {_.map(data.genres, genre => (
                <div style={styles.pill}>{genre.name}</div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )
  );
}
