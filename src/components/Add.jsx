import React, { Component } from 'react';

class Add extends Component {
    render () {
        return (
            <div className='add'>
                <input 
                    type="checkbox" 
                    className='add__checkbox' 
                />

                <input 
                    type="text" 
                    className='add__text'
                />

                <button 
                    type="button" 
                    className='add__btn'
                >
                    Добавить
                </button>
            </div>
        )
    }
}

export default Add;