import React from 'react';

const styles = {
	toolbar: {
	    height: 60,
	    display: 'flex',
	    padding: '15px 25px',
	},
	logo: {
	    alignSelf: 'center',
	    height: '75%',
	},
}

export default function Toolbar(props) {
	return (
		<div style={styles.toolbar}>
	        <img style={styles.logo} src="tiff-logo.jpg"/>
	    </div>
	)
}

