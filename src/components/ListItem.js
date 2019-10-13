import React from 'react';

import Typography from './Typography';

const styles = {
	listItemContent: {
	    height: 250,
	    width: 200,
	    border: '1px solid red',
	    marginBottom: 10,
	},
}

export default function ListItem(props) {
	return (
		<div style={styles.listItem}>
	        <div style={styles.listItemContent}>
	        	<img src={props.imageUrl} />
	        </div>
	        <Typography variant="body">{props.name}</Typography>
        </div>
	)
}

