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

        this.state = {
            data: []
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
    }

    componentwillUnmount = () => {
        this._unsubscribe();
        this._unsubscribeDelete();
    }


    render () {
        return (
            <div className='container'>
                <Add />
                <List data={this.state.data}/>
            </div>
        )
    }
}

export default App;