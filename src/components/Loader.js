import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
	0% { 
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`
const LoaderIcon = styled.img `
	animation: ${Spin} 2s linear infinite;
	height: 50px;
`

export default function Loader() {
  return (
    <LoaderIcon src="tiff-movie-icon.png" />
  )
}