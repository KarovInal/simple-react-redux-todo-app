import React, { Component } from 'react';
import Input from './Input';
import EventEmitter from '../EventEmitter';


window.ee = new EventEmitter();

class List extends Component {




    render () {
        const newData = this.props.data;

        const template = newData.map((item, i) => {
            return (
                <Input 
                    value={item.textValue} 
                    key={i} 
                    className="list__item" 
                    index={i} 
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

export default List;