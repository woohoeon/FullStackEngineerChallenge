import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

const SButtonWrapper = styled.div`
  margin-top: 16px;
  width: 50%;
  max-width: 400px;
`

const LoginPresenter = ({ handleLogin }) => (
  <Wrapper>
    <SPaper>
      <SIcon>
        <LockOutlinedIcon />
      </SIcon>
      <SButtonWrapper>
        <Button type="submit" size="large" fullWidth variant="contained" color="primary" onClick={handleLogin}>
          Log in
        </Button>
      </SButtonWrapper>
    </SPaper>
  </Wrapper>
)

LoginPresenter.propTypes = {
  handleLogin: PropTypes.func.isRequired,
}

export default LoginPresenter
