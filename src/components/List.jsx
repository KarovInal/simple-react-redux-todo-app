import React from 'react';
import Input from './Input';
 

export default function List({ dataItems, deleteItemToList, updateItemToList }) {

    let template = dataItems.map((item, i) => {
        return (
            <Input 
                value={item.textValue} 
                key={item.id} 
                className="list__item" 
                index={i} 
                deleteItems={deleteItemToList}
                updateItems={updateItemToList}
            />
        )
    })

    return (
        <div className="list">
            {template}
        </div>
    )
}