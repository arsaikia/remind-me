import styled from 'styled-components';

const Container = styled.div`
    width: ${({width}) => width || 'auto'};
    height: ${({height}) => height || 'auto'};
    background-color: ${({bg}) => bg || 'none'};
    background: ${({background}) => background || 'none'};
    z-index: ${({zIndex}) => zIndex || 1};
    position: ${({position}) => position || 'auto'};
    top: ${({top}) => top || 'auto'};
    border: ${({border}) => border || 'none'};
    padding: ${({padding}) => padding || 'auto'};

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



export {
    Container,
    Flex,
    CenteredFlex,

}