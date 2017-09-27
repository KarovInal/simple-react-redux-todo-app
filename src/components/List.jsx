import React from 'react';
import Input from './Input';
 

export default function List(props) {
    // let template;
    // const data = this.props.dataItems;

    // if (this.props.dataItem) {
        let template = this.props.dataItem.map((item, i) => {
            return (
                <Input 
                    value={item.textValue} 
                    key={item.id} 
                    className="list__item" 
                    index={i} 
                />
            )
        })
    // }

    return (
        <div className="list">
            {template}
        </div>
    )
}