import React, { Component } from 'react';
import EventEmitter from '../EventEmitter';
import Button from './Button';


window.ee = new EventEmitter();

class Add extends Component {
    constructor() {
        super();
        
        this.state = {
            isEmpty: false
        }
    }

    componentDidMount() {
        this.textInput.focus();
    }

    addClickHandler = (e) => {
        e.preventDefault(); 
        let textValue = this.textInput.value;

        const item = { textValue };

        window.ee.emit('add.item', item);

        this.textInput.value = '';
        this.setState({ isEmpty: true }); 
        this.textInput.focus();
    }

    btnOnChangeHandler = ({ target }) => {
        if (target.value.length < 0) {
            this.setState({ isEmpty: false }); 
        } else {
            this.setState({ isEmpty: false }); 
        }
    }

    render () {
        let empty = this.state.isEmpty;
        
        return (
            <div className='add'>
                <input 
                    type="checkbox" 
                    className='checkbox' 
                />

                <input 
                    type="text" 
                    className='add__text'
                    placeholder='Введите значение'
                    ref={input => this.textInput = input}
                    onChange={this.btnOnChangeHandler}
                />

                <Button
                    type="button" 
                    className='add__btn'
                    onClick={this.addClickHandler}
                    disabled={empty}
                    value="Добавить"
                />
            </div>
        )
    }
}

export default Add;