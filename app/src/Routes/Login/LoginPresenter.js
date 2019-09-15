import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1201;
	display: flex;
	align-items: center;
`

const InputField = styled(TextField)`
  &&{
    margin:16px 0;
  }
`

const SPaper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
`

const SIcon = styled(Avatar)`
  && {
    margin: 8px;
    background-color: ${(props) => props.theme.palette.secondary.main};
    color:#000000;
  }
`

const SFormWrapper = styled.div`
	margin-top: 16px;
	width: 50%;
	max-width: 400px;
`

const SButtonWrapper = styled.div`margin-top: 16px;`

const LoginPresenter = ({ role, id, password, updateRole, updateId, updatePassword, handleLogin }) => (
	<Wrapper>
		<SPaper>
			<SIcon>
				<LockOutlinedIcon />
			</SIcon>
			<SFormWrapper>
				<FormLabel component="legend">Role</FormLabel>
				<RadioGroup aria-label="role" name="Role" value={role} onChange={updateRole}>
					<FormControlLabel value="admin" control={<Radio />} label="Admin" />
					<FormControlLabel value="employee" control={<Radio />} label="Employee" />
				</RadioGroup>
				<InputField id="id" label="Email Address" type="email" value={id} onChange={updateId} margin="normal" variant="outlined" fullWidth />
				<InputField id="password" label="Password" type="password" value={password} onChange={updatePassword} margin="normal" variant="outlined" fullWidth />
				<SButtonWrapper>
					<Button type="submit" size="large" fullWidth variant="contained" color="primary" onClick={handleLogin}>
						Log in
					</Button>
				</SButtonWrapper>
			</SFormWrapper>
		</SPaper>
	</Wrapper>
)

LoginPresenter.propTypes = {
	role: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	updateRole: PropTypes.func.isRequired,
	updateId: PropTypes.func.isRequired,
	updatePassword: PropTypes.func.isRequired,
	handleLogin: PropTypes.func.isRequired
}

export default LoginPresenter
