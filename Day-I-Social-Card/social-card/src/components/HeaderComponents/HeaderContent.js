import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
    return (<div><HeaderTitle />
        <p className="header-content"> Let 's learn React by building simple interfaces with components. Don't
        try to overthink it, just keep it simple and hav fun, Once you feel comfortable using componenets you are well on your way to mastering React! </p>
        </div>)
};


export default HeaderContent;