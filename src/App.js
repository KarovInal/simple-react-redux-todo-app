import React, { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import EventEmitter from './EventEmitter';


window.ee = new EventEmitter();


class App extends Component {
    constructor () {
        super();
        this._unsubscribe = null;
        this._unsubscribeDelete = null;
        this._unsubscribeUpdate = null;

        this.state = {
            data: [],
            mainIsChecked: false
        }
        
    }

    componentDidMount = () => {
        this._unsubscribe = window.ee.subscribe('add.item', (item) => {
            let oldData = [...this.state.data, item];
            this.setState({ data: oldData })
        });

        this._unsubscribeDelete = window.ee.subscribe('delete', (id) => {
            let oldData = [...this.state.data];
            oldData.splice(id, 1);
            this.setState({ data: oldData })
        });

        this._unsubscribeUpdate = window.ee.subscribe('update', ({ id, innerItem }) => {
            let oldData = [...this.state.data];
            oldData.splice(id, 1, innerItem);
            this.setState({ data: oldData })
        });
    }

    componentwillUnmount = () => {
        this._unsubscribe();
        this._unsubscribeDelete();
        this._unsubscribeUpdate();
    }


    checkingOnChangeHandler = () => {
        let stateCheck = this.state.mainIsChecked;
        this.setState({ mainIsChecked: !this.state.mainIsChecked });

        window.ee.emit('allChecked', stateCheck)
    }

    
    render () {
        return (
            <div className='container'>
                <Add 
                    onChange={this.checkingOnChangeHandler} 
                    checked={this.state.mainIsChecked} />
                <List 
                    data={this.state.data} 
                    isChecked={this.state.mainIsChecked} 
                />
            </div>
        )
    }
}

export default App;