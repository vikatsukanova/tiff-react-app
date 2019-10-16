import React from 'react';
import styled from 'styled-components';

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
	},
	hoverCover: {
		position: 'absolute',
	}
}

const ListItemContent = styled.div`
	border: 6px solid black;
	&:hover {
	    border: 6px solid orange;
	}
`

export default function ListItem(props) {
	return (
		<div style={styles.listItem} onClick={props.onClick}>
	        <ListItemContent style={styles.listItemContent}>
	        	<img style={styles.image} src={props.imageUrl} alt={props.title}/>
	        </ListItemContent>
	        <Typography variant="body">{props.name}</Typography>
        </div>
	)
}

