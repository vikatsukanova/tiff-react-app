import React from 'react';

const styles = {
	toolbar: {
	    backgroundColor: 'black',
	    height: 60,
	    display: 'flex',
	    padding: '5px 25px',
	},
	  logo: {
	    color: 'white',
	    alignSelf: 'center',
	},
}

export default function Toolbar(props) {
	return (
		<div style={styles.toolbar}>
	        <div style={styles.logo}>
		        <p style={styles.logo}>TIFF</p>
		    </div>
	    </div>
	)
}

