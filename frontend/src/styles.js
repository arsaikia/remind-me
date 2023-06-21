import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Container = styled.div`
    width: ${({width}) => width || 'auto'};
    max-width: ${({maxWidth}) => maxWidth || 'auto'};
    min-width: ${({minWidth}) => minWidth || 'auto'};
    height: ${({height}) => height || 'auto'};
    min-height: ${({minHeight}) => minHeight || 'auto'};
    background-color: ${({bg}) => bg || 'none'};
    background: ${({background}) => background || 'none'};
    z-index: ${({zIndex}) => zIndex || 1};
    position: ${({position}) => position || 'auto'};
    top: ${({top}) => top || 'auto'};
    border: ${({border}) => border || 'none'};
    padding: ${({padding}) => padding || 'auto'};
    background: ${({background}) => background && background};
    box-shadow: ${({boxShadow}) => boxShadow || 'none'};

`;


const Flex = styled(Container)`
    display: flex;
    flex-direction: ${({direction}) => direction || 'row'};
    justify-content: ${({justifyContent}) => justifyContent && justifyContent};
    align-items: ${({alignItems}) => alignItems && alignItems};

`;

const CenteredFlex = (props) => (
    <Flex
        justifyContent="center"
        alignItems="center"
        {...props}
    />
)

const StyledNavLink = styled(NavLink)`
    padding: ${({padding}) => padding || 'auto'};
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;

const BlankButton = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;



export {
    Container,
    Flex,
    CenteredFlex,
    StyledNavLink,
    BlankButton,
}