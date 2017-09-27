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


    // disableOnClickHandler() {
    //     const index = this.props.index;
    //     const textValue = this.text.value;

    //     const item = {
    //         index,
    //         innerItem: {
    //             textValue
    //         }
    //     }

    //     this.setState({ isDisabled: true })
    //     window.ee.emit('update', item)
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
                />

                <button 
                    className="btn  btn_change"
                    type="button" 
                > Изменить
                </button> 

                <button 
                    className="btn  btn_delete"
                    type="button"
                > Удалить
                </button>
            </div>
        )
    }
}

