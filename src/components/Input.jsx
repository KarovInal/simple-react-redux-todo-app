// import React, { Component } from 'react';
// import Button from './Button';
// import Checkbox from './Checkbox';


// export default class Input extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isDisabled: true,
//             isChecked: false
//         }

//         this.changeOnClickHandler = this.changeOnClickHandler.bind(this);
//         this.checkingOnChangeHandler = this.checkingOnChangeHandler.bind(this);
//         this.disableOnClickHandler = this.disableOnClickHandler.bind(this);
//     }


//     componentDidMount = () => {
//         this._unsubscribe = window.ee.subscribe('allChecked', (state) => {
//             this.setState({ isChecked: !state })
//         });
//     }


//     changeOnClickHandler() {
//         this.text.focus();  
//         this.setState({ isDisabled: false })
//     }

//     checkingOnChangeHandler() {
//         this.setState({ isChecked: !this.state.isChecked });
//     }


//     disableOnClickHandler() {
//         const index = this.props.index;
//         const textValue = this.text.value;

//         const item = {
//             index,
//             innerItem: {
//                 textValue
//             }
//         }

//         this.setState({ isDisabled: true })
//         window.ee.emit('update', item)
//     }


//     render () {
//         let {check, index, clickRemove, value} = this.props;
//         let {isChecked, isDisabled}  = this.state;

        
//         return (
//             <div className="list__item">

//                 <Checkbox 
//                     type="checkbox" 
//                     className='checkbox' 
//                     checked={isChecked}
//                     onChange={this.checkingOnChangeHandler}
//                 />

//                 <input 
//                     className={"view-text " + (isChecked || check ? "ischeck": "")}
//                     type="text" 
//                     disabled={isDisabled}
//                     defaultValue={value}
//                     ref={input => this.text = input}
//                     onChange={this.btnOnChangeHandler}
//                     onBlur={this.disableOnClickHandler}
//                 />

//                 <Button 
//                     className="btn  btn_change"
//                     type="button" 
//                     disabled={false}
//                     onClick={this.changeOnClickHandler}
//                     value="Изменить"
//                 /> 

//                 <Button 
//                     className="btn  btn_delete"
//                     type="button"
//                     disabled={false}
//                     onClick={clickRemove.bind(this, index)}
//                     value="Удалить"
//                 />
//             </div>
//         )
//     }
// }

