import React, { Component } from 'react';
import Button from './Button';


class Add extends Component {
    constructor() {
        super();
        
        this.state = {
            isEmpty: false
        }
    }

    componentDidMount() {
        this.textInput.focus();
        this.setState({ isEmpty: true }); 
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
            this.setState({ isEmpty: true }); 
        } else {
            this.setState({ isEmpty: false }); 
        }
    }

    title = () => <h1 className='header__title'>TODO-REACT</h1>;

    render () {
        let empty = this.state.isEmpty;

        return (
            <div className='add'>
                <div className="add-header">{this.title()}</div>
                <input 
                    type="checkbox" 
                    className='checkbox' 
                    checked={this.props.checked}
                    onChange={this.props.onChange}
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