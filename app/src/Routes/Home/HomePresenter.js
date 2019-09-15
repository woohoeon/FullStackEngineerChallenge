import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`padding: 32px;`

const HomePresenter = () => (
	<Container>
		<Typography variant="h2" gutterBottom>
			Home
		</Typography>
	</Container>
)

export default HomePresenter
