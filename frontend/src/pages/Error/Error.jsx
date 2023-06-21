import React from 'react'
import { CenteredFlex, Container } from '../../styles';
import { useNavigate } from 'react-router-dom';
import Error404Icon from './errorIcon.png';

const Error = () => {

  const navigate = useNavigate();

  return (
    <CenteredFlex
      direction='column'
      width="100%"
      height="90vh">
      <img src={Error404Icon} />
      <h3>Oops! Looks like you've hit a dead end!</h3>
      <Container width="30%">
        <button
          className='button-6'
          onClick={() => navigate('/')}
        >
          Go home ?
        </button>
      </Container>
    </CenteredFlex>
  )
}

export default Error;