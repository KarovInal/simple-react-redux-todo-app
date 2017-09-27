import React, { Component } from 'react';

export default class AddElem extends Component {

    constructor() {
        super();

        this.state = {
            isDisabled: true
        }
    }

    componentDidMount() {
        this.textInput.focus();
    }

    addClickHandler = () => {
        const textValue = this.textInput.value;

        const item = {
            id: Date.now().toString(),
            textValue   
        }

        if (textValue.length > 0) {
            this.props.addItemToList(item);
            this.textInput.value = '';
        } else {
            alert('Пожалуйста введите значение!');
        }

        this.textInput.focus();
    }


    // onChangeIsDisable = () => {
    //     if (this.textInput.length > 0) {
    //         this.setState({ isDisabled: !this.state.isDisabled });
    //     }
    // }

    onkeyupHandler = (e) => {
        if (e.keyCode === 13) {
            this.addClickHandler();
        }
    }

    title = () => {
        return <h1 className='header__title'>todo-REACT</h1>;
    }

    render () {
        return (
            <div className='add'>
                <div className="add-header">{this.title()}</div>
                
                <input 
                    type='checkbox' 
                    className='checkbox'
                    onClick={this.props.onChangeChecked.bind(null, !this.props.isChecked.isChecked)}
                />

                <input 
                    type="text" 
                    className='add__text'
                    placeholder='Введите значение'
                    ref={input => this.textInput = input}
                    onKeyDown={this.onkeyupHandler}
                    onChange={this.onChangeIsDisable}
                />

                <button 
                    className='btn'
                    type='button' 
                    onClick={this.addClickHandler}
                >Добавить
                </button>

            </div>
        );
    }
}


