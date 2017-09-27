import React, { Component } from 'react';
// import Button from './Button';
// import Checkbox from './Checkbox';


export default class Input extends Component {



    // componentDidMount = () => {
    //     this._unsubscribe = window.ee.subscribe('allChecked', (state) => {
    //         this.setState({ isChecked: !state })
    //     });
    // }


    // changeOnClickHandler() {
    //     this.text.focus();  
    //     this.setState({ isDisabled: false })
    // }

    // checkingOnChangeHandler() {
    //     this.setState({ isChecked: !this.state.isChecked });
    // }


    onChangeHandler = () => {
        const index = this.props.index;
        const textValue = this.text.value;

        return {
            index,
            item: {
                id: Date.now().toString(),
                textValue
            }
        }

    }


    render () {
        // const {index, value} = this.props;
        // const _this = this;
        // const textValue = this.text.value;

        
        return (
            <div className="list__item">

                <input
                    type="checkbox" 
                    className='checkbox' 
                />

                <input 
                    className="view-text"
                    type="text" 
                    ref={input => this.text = input}
                    defaultValue={this.props.value}
                    onBlur={
                        this.props.updateItems.bind(null, this.onChangeHandler())}
                />
 
                <button 
                    className="btn  btn_change"
                    type="button" 
                > Изменить
                </button> 

                <button 
                    className="btn  btn_delete"
                    type="button"
                    onClick={this.props.deleteItems.bind(null, this.props.index)}
                > Удалить
                </button>
            </div>
        )
    }
}

