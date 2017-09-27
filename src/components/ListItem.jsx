import React, { Component } from 'react';


export default class ListItem extends Component {

    constructor() {
        super();

        this.state = {
            isLocalChecked: false,
            isDisabled: true
        }
    }


    onChangeDisabledHandler = () => {
        this.textInput.focus();
        this.setState({ isDisabled: !this.state.isDisabled });
    }


    onCheckedHandler = () => {
        this.setState({ isLocalChecked: !this.state.isLocalChecked });
    }


    onChangeHandler = () => {
        const index = this.props.index;
        const text = this.textInput.value;

        const item = {
            index,
            item: {
                id: Date.now().toString(),
                textValue: text
            }
        }

        return item;
    }

    update = () => {
        this.props.updateItems(this.onChangeHandler());
    }

    delete = () => {
        this.props.deleteItems(this.props.index);
    }


    render () {
        const { value, parentIsChecked } = this.props;
        const { isLocalChecked, isDisabled } = this.state;

        return (
            <div className="list__item">

                <input
                    type="checkbox" 
                    className="checkbox"
                    onChange={this.onCheckedHandler}
                    checked={parentIsChecked.isChecked}
                />

                <input 
                    className={"view-text " + (isLocalChecked || parentIsChecked.isChecked ? "ischeck": '')}
                    type="text" 
                    ref={input => this.textInput = input} 
                    defaultValue={value}
                    onBlur={this.update}
                    disabled={isDisabled}
                />
 
                <button 
                    className="btn  btn_change"
                    type="button" 
                    onClick={this.onChangeDisabledHandler}
                > Изменить
                </button> 

                <button 
                    className="btn  btn_delete"
                    type="button"
                    onClick={this.delete}
                > Удалить
                </button>
            </div>
        )
    }
}

