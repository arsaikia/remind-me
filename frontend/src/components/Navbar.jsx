import React from 'react'
import { Container, Flex, CenteredFlex, StyledNavLink, BlankButton } from '../styles'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../logo.png'
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { getQuestions, resetAuthState } from '../actions/actions';


const Navbar = () => {
  const loc = useLocation();
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(['userId', 'openTab']);
  
  // Get states using useSelector ( state->reducerName )
  const userAuthState = useSelector(state => state.auth);
  
  // Fire actions using dispatch -> fires action -> Watcher saga handles rest
  const dispatch = useDispatch();
  const fetchAllQuestions = (userId) => dispatch(getQuestions(userId));
  const resetAuth = () => dispatch(resetAuthState());

  const userIdInCookie = cookies.userId;
  const name = cookies.name;
  const isUserAuthenticated = userIdInCookie;

  /******************************************************************************
   * HANDLER FUNCTIONS
  ******************************************************************************/
  const signOutHandler = () => {
    removeCookie('userId');
    removeCookie('name');
    resetAuth();
    fetchAllQuestions('guest');
    navigate('/all');
  }

  return (
    <CenteredFlex
      justifyContent="space-between"
      width={"100%"}
      maxWidth={"100vw"}
      height={"8vh"}
      position={"fixed"}
      zIndex={1000}
      top={'0'}
      bg={"#ffff"}
      border={'1px solid #dee7f9'}
      background={'linear-gradient(180deg, rgba(254,254,254,1) 35%, rgba(225,225,225,1) 100%)'}
    >
      {/* LOGO */}
      <Container
        position="relative"
        width="10%"
        padding="0 0 0 1rem"
      >
        <NavLink to="/">
          <img src={logo} style={{ width: '60%', height: 'auto', cursor: 'pointer' }} onClick={() => console.log("clicked on logo!")} />
        </NavLink>
      </Container>
      
      {/* Routes */}
      <CenteredFlex
        justifyContent="space-around"
        width="30%"
        height="100%"
      >
        {/* <p>All Questions</p> */}
      </CenteredFlex>

      {/* Account */}
      <CenteredFlex
        justifyContent="space-around"
        minWidth="20%"
        height="100%"
      >

        {/* Keeping only route here as lone route at middle of nav looks off */}
        {
          loc.pathname !=="/all" && (
            <StyledNavLink className="bold" padding="0 0.8rem" to="/all">
              <p>Questions</p>
            </StyledNavLink>
          )
        }

        {isUserAuthenticated && <p style={{ padding: "0 0.8rem" }}>
          {`Hi, ${name}`}
        </p>}

        {isUserAuthenticated && <BlankButton className="bold" onClick={signOutHandler}>
          Sign Out
        </BlankButton>}

        {
          !isUserAuthenticated && loc.pathname !=="/login" && (
            <StyledNavLink className="bold" padding="0 0.8rem" to="/login">
              <p>Login</p>
            </StyledNavLink>
          )
        }

        {
          !isUserAuthenticated && loc.pathname !=="/signup" && (
            <StyledNavLink className="bold" padding="0 0.8rem" to="/signup">
              <p>Signup</p>
            </StyledNavLink>
          )
        }
      </CenteredFlex>
    </CenteredFlex>
  )
}

export default Navbar;