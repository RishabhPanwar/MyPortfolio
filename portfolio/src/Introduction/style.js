import styled from 'styled-components';
// import backgroundImage from '../../public/images/background.jpg';
const primaryColor = '#ffffff';
const backgoundColor = '#444';
const secondaryColor = '#eece1a';
// const backgroundOpacity = '0.5';
// const showHomeImage = 'true';

const Background = styled.div`
    text-align: left;
    padding: 4rem;
    height: 100%
    background-color: ${backgoundColor};
    height: 100vh;
    font-family: Titillium Web;
    letter-spacing: 2px;
    background-image: url(images/background.jpg);
    background-attachment: fixed;
    background-size: cover;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(68,68,68,0.7);
`;

const Name = styled.div`
    position: fixed;
    z-index: 2;
    width: 100%;
    margin: 20vh;
`;

const FName = styled.div`
    display: inline-block;
    color: ${primaryColor};
    font-size: 60px;
`;

const LName = styled.div`
    display: inline-block;
    margin-left: 5px;
    color: ${secondaryColor};
    font-size: 60px;
`;

const Description = styled.div`
    color: ${primaryColor};
    padding-left: 10px;
    margin: 0px 0 5px 0;
`;

const Links = styled.div`
    > a {
        margin-left: 10px;
        color: ${primaryColor};
        > i {
            cursor: pointer;
        }
        :hover {
            color: ${secondaryColor};
            transition: all 0.5s ease-out; 
        }
    }
`;

export { Background, Overlay, FName, LName, Name, Description,Links };