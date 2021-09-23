import React, { Component } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import Toggle from '\\components/Toggle'

import { HeaderStyle, Title, SubTitle} from './styles'; 

class Header extends Component {

    

    
    render() {

        return (
            <HeaderStyle>
                <Title>Hacker news reader</Title>
                <SubTitle>Selected news story</SubTitle>
                <Toggle/>
            </HeaderStyle>
        );
    }
}

export default Header;