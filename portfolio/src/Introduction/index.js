import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import styled from 'styled-components';

import { Background, Overlay, Name, FName, LName, Description, Links } from './style';

class Introduction extends React.Component {
    render() {
        return (
            <Background>
                <Overlay>
                    <Name>
                        <FName>Rishabh</FName>
                        <LName>Panwar</LName>
                        <Description>
                        Webdeveloper and Programmer
                    </Description>
                    <Links>
                        <a href="https://linkedin.com/in/rishabh-panwar-31511811a" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/RishabhPanwar" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.facebook.com/rishabh.panwar.35"  target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </Links>
                    </Name>
                </Overlay>
            </Background>
        );
    }   
}

export default Introduction;
