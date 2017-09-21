import React, { Component } from 'react';
import Button from './Button';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: true
        }
    }


    changeOnClickHandler = () => {
        this.setState({ isDisabled: false })
        this.text.focus();
    }


    disableOnClickHandler = () => {
        this.setState({ isDisabled: true })
    }


    removeOnClickHandler = ( e) => {
        const index = this.props.index;
        window.ee.emit('delete', index)
    }


    render () {
        let text = this.props.value;
        let disabled = this.state.isDisabled;
        
        return (
            <div className="list__item">
                <input 
                    className="checkbox"
                    type="checkbox" 
                />

                <input 
                    className="view-text"
                    type="text" 
                    defaultValue={text}
                    ref={input => this.text = input}
                    onChange={this.btnOnChangeHandler}
                    onBlur={this.disableOnClickHandler}
                />

                <Button 
                    className="btn  btn_change"
                    type="button" 
                    disabled={disabled}
                    onClick={this.changeOnClickHandler}
                    value="Изменить"
                /> 

                <Button 
                    className="btn  btn_change"
                    type="button"
                    disabled={false}
                    onClick={this.removeOnClickHandler}
                    value="Удалить"
                />
            </div>
        )
    }
}

export default Input;