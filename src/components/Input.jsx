import React, { Component } from 'react';
// import Button from './Button';
// import Checkbox from './Checkbox';


export default class Input extends Component {

    constructor() {
        super();

        this.state = {
            textValue: ''
        }
    }



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


    // onChangeHandler = () => {
    //     const index = this.props.index;
    //     const textValue = this.text.value;

    //     const item = {
    //         index,
    //         item: {
    //             id: Date.now().toString(),
    //             textValue
    //         }
    //     }

    //     return item;

    // }

    // onChangeHandler = ({ target }) => {
    //     this.setState({ textValue:  });
    // }


    render () {

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
                        this.props.updateItems.bind(null, {
                            index: this.props.index,
                            item: {
                                id: Date.now().toString(),
                                textValue: this.text.value
                            }
                        })}
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

