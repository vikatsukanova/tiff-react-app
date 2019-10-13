import React from 'react';

const styles = {
	header: {
		fontSize: 42,
		fontWeight: 500,
	},
	body: {
		fontSize: 19,
		fontWeight: 400,
	}
}

export default function Typography(props) {
	let variant;

	switch(props.variant) {
		case "header":
			variant = 'header';
			break;
		case "body":
			variant = 'body';
			break;
		default:
			variant = 'body';
	} 
	
	return (
		<div style={styles[variant]}>{props.children}</div>
	)
}

