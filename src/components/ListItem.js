import React from 'react';

import Typography from './Typography';

const styles = {
	listItem: {
	    width: 200,
	    margin: 10,
	},
	listItemContent: {
		height: 300,
		width: 200,
		overflow: 'hidden',
		marginBottom: 10,
	},
	image: {
		height: '100%',
	}
}

const imageUrl = 'https://image.tmdb.org/t/p/w500'

export default function ListItem(props) {
	return (
		<div style={styles.listItem}>
	        <div style={styles.listItemContent}>
	        	<img style={styles.image} src={imageUrl+props.imageUrl} alt={''}/>
	        </div>
	        <Typography variant="body">{props.name}</Typography>
        </div>
	)
}

