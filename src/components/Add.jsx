import React, { Component } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';


export default class Add extends Component {
    constructor() {
        super();
        
        this.state = {
            isEmpty: false
        }

        this.handleEnter = this.handleEnter.bind(this)
        this.btnOnChangeHandler = this.btnOnChangeHandler.bind(this)
        this.addClickHandler = this.addClickHandler.bind(this)
    }

    componentDidMount() {
        this.textInput.focus();
        this.setState({ isEmpty: true }); 

        document.addEventListener('keydown', this.handleEnter);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEnter)
    }

    handleEnter(e) {
        if(e.key === 'Enter') {
            this.addClickHandler(e);
        }
    }

    randomId() {
        return Math.random().toString(36).slice(2);
    }
      

    addClickHandler(e) {
        e.preventDefault();
        let textValue = this.textInput.value;
        let id = this.randomId();

        const item = { 
            id,
            textValue 
        };

        window.ee.emit('add.item', item);

        this.textInput.value = '';
        this.setState({ isEmpty: true }); 
        this.textInput.focus();
    }

    btnOnChangeHandler({ target }) {
        if (target.value.length < 0) {
            this.setState({ isEmpty: true }); 
        } else {
            this.setState({ isEmpty: false }); 
        }
    }

    title() {
        return <h1 className='header__title'>todo-REACT</h1>;
    }

    render () {
        let empty = this.state.isEmpty;

        return (
            <div className='add'>
                <div className="add-header">{this.title()}</div>

                <Checkbox 
                    type="checkbox" 
                    className='checkbox' 
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                    disabled={this.props.disable}
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
