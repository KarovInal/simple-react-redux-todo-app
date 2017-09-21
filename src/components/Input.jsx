import React, { Component } from 'react';
import Button from './Button';


class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: true,
            isChecked: false
        }
    }


    componentDidMount = () => {
        this._unsubscribe = window.ee.subscribe('allChecked', (state) => {
            this.setState({ isChecked: !state })
        });
    }


    changeOnClickHandler = () => {
        this.text.focus();  
        this.setState({ isDisabled: false })
    }

    checkingOnChangeHandler = () => {
        this.setState({ isChecked: !this.state.isChecked });
    }


    disableOnClickHandler = () => {
        const index = this.props.index;
        const textValue = this.text.value;

        const item = {
            index,
            innerItem: {
                textValue
            }
        }

        this.setState({ isDisabled: true })
        window.ee.emit('update', item)
    }


    removeOnClickHandler = ( e) => {
        const index = this.props.index;
        window.ee.emit('delete', index)
    }


    render () {
        let text = this.props.value;
        let disabled = this.state.isDisabled;
        let checked = this.state.isChecked;
        
        return (
            <div className="list__item">
                <input 
                    className="checkbox"
                    type="checkbox" 
                    checked={checked}
                    onChange={this.checkingOnChangeHandler}
                />

                <input 
                    className={"view-text " + (checked || this.props.check ? "ischeck": "")}
                    type="text" 
                    disabled={disabled}
                    defaultValue={text}
                    ref={input => this.text = input}
                    onChange={this.btnOnChangeHandler}
                    onBlur={this.disableOnClickHandler}
                />

                <Button 
                    className="btn  btn_change"
                    type="button" 
                    disabled={false}
                    onClick={this.changeOnClickHandler}
                    value="Изменить"
                /> 

                <Button 
                    className="btn  btn_delete"
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