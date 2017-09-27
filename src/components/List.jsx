import React from 'react';
import ListItem from './ListItem';

export default function List({ dataItems, deleteItemToList, updateItemToList, isChecked }) {

    let template = dataItems.map((item, i) => {
        return (
            <ListItem 
                value={item.textValue} 
                key={item.id} 
                className="list__item" 
                index={i} 
                deleteItems={deleteItemToList}
                updateItems={updateItemToList}
                parentIsChecked={isChecked}
            />
        )
    })

    return (
        <div className="list">
            {template}
        </div>
    )
}