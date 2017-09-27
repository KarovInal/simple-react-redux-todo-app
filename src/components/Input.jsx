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


    // onChangeHandler = () => {
    //     const index = this.props.index;
    //     const textValue = this.text.value;

    //     return {
    //         index,
    //         item: {
    //             id: Date.now().tostring(),
    //             textValue
    //         }
    //     }

    // }


    render () {
        const {index, value} = this.props;

        
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
                    defaultValue={value}
                    onBlur={
                        this.props.updateItems.bind(null, {
                                index,
                                item: {
                                    id: Date.now().toString(),
                                    textValue: value
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
                    onClick={this.props.deleteItems.bind(null, index)}
                > Удалить
                </button>
            </div>
        )
    }
}

