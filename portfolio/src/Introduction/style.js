import styled from 'styled-components'

const Background = styled.div`
    text-align: left;
    padding-left: 100px;
    background-color: #444;
    height: 100vh;
`;

const Name = styled.div`
    
`;

const FName = styled.div`
    display: inline-block;
    color: #FFFFFF;
    font-size: 60px;
`;

const LName = styled.div`
    display: inline-block;
    margin-left: 5px;
    color: yellow;
    font-size: 60px;
`;

const Description = styled.div`
    color: #ffffff;
    padding-left: 10px;
`;

const Links = styled.div`
    > a {
        margin-left: 10px;
        color: #ffffff;
        > i {
            cursor: pointer;
        }
    }
`;

export { Background, FName, LName, Name, Description,Links };