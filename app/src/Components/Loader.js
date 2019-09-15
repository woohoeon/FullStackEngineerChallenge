import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	font-size: 28px;
	margin-top: 50px;
`

const Loader = () => (
	<Container>
		<CircularProgress />
	</Container>
)

export default Loader
