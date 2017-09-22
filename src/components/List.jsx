import React, { Component } from 'react';
import Input from './Input';


export default class List extends Component {

    render () {
        let {remove, isChecked, data} = this.props;
        
        const template = data.map((item, i) => {
            return (
                <Input 
                    value={item.textValue} 
                    key={item.id} 
                    className="list__item" 
                    index={i} 
                    check={isChecked}
                    clickRemove={remove}
                />
            )
        })

        return (
            <div className="list">
                {template}
            </div>
        )
    }
}