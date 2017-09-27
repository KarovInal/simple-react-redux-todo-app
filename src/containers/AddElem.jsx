import React, { Component } from 'react';

export default class AddElem extends Component {

    addClickHandler = () => {
        const textValue = this.textInput.value;

        const item = {
            id: Date.now().toString(),
            textValue   
        }

        this.props.addItemToList(item);
        this.textInput.value = '';

        console.log(this.props.dataItems)
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
                    className=''
                />


                <input 
                    type="text" 
                    className='add__text'
                    placeholder='Введите значение'
                    ref={input => this.textInput = input}
                />

                <button 
                    className=''
                    type='button' 
                    onClick={this.addClickHandler}
                >Добавить
                </button>

            </div>
        );
    }
}


