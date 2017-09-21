import React, { Component } from 'react';
import Add from './Add';

class Header extends Component {
    render () {
        return (
            <div className="header">
                <h1 className='header__title'>TODO-REACT</h1>
                <Add />
            </div>
        )
    }
}

export default Header;