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
		cursor: 'pointer',
	},
	image: {
		height: '100%',
	}
}

export default function ListItem(props) {
	return (
		<div style={styles.listItem} onClick={props.onClick}>
	        <div style={styles.listItemContent}>
	        	<img style={styles.image} src={props.imageUrl} alt={''}/>
	        </div>
	        <Typography variant="body">{props.name}</Typography>
        </div>
	)
}

