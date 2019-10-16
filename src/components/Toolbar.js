import React from 'react';

const styles = {
	toolbar: {
	    display: 'flex',
	    padding: '15px 25px',
	    position: 'fixed',
	    height: 50,
	    background: 'white',
	    width: '100%',
	},
	logo: {
	    alignSelf: 'center',
	    height: 45,
	},
}

export default function Toolbar(props) {
	return (
		<div style={styles.toolbar}>
	        <img style={styles.logo} src="tiff-logo.jpg" alt="tiff logo"/>
	    </div>
	)
}

