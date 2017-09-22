import React, { Component } from 'react';
import Add from './components/Add';
import List from './components/List';
import EventEmitter from './EventEmitter';
import PropTypes from 'prop-types';

window.ee = new EventEmitter();

export default class App extends Component {
    constructor () {
        super();

        this.state = {
            data: [],
            mainIsChecked: false
            // idDisabled: true
        }

        this.removeOnClickHandler = this.removeOnClickHandler.bind(this)
        this.checkingOnChangeHandler = this.checkingOnChangeHandler.bind(this)
        // this.disabledOnchangeHandler = this.disabledOnchangeHandler.bind(this)
        
    }

    disabledOnchangeHandler() {
        if (this.state.data.length > 0) {
            this.setState({ idDisabled: true});
        } else {
            this.setState({ idDisabled: false});
        }
    }

    removeOnClickHandler(index, e) {
        this.setState(({ data }) => {
            data.splice(index, 1);
            return { data };
        });
    }


    componentDidMount() {
        this._unsubscribe = window.ee.subscribe('add.item', (item) => {
            let oldData = this.state.data.concat(item);
            this.setState({ data: oldData })
        });

        this._unsubscribeUpdate = window.ee.subscribe('update', ({ id, innerItem }) => {
            let oldData = [...this.state.data];
            oldData.splice(id, 1, innerItem);
            this.setState({ data: oldData })
        });
    }

    componentwillUnmount() {
        this._unsubscribe();
        this._unsubscribeUpdate();
    }


    checkingOnChangeHandler() {
        let {mainIsChecked} = this.state;
        this.setState({ mainIsChecked: !mainIsChecked });

        window.ee.emit('allChecked', mainIsChecked)
    }

    
    render () {
        let {mainIsChecked, data, idDisabled} = this.state;

        return (
            <div className='container'>
                <Add 
                    onChange={this.checkingOnChangeHandler} 
                    checked={mainIsChecked} 
                    disable={idDisabled}
                />
                
                <List 
                    data={data} 
                    isChecked={mainIsChecked} 
                    remove={this.removeOnClickHandler}
                />
            </div>
        )
    }
}

App.PropTypes = {
    data: PropTypes.array.isRequired
}