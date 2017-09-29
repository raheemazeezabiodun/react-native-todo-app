import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import configureStore from './js/store';
import TodoAppRedux from './js/App';

const store = configureStore();

export default class Todo extends Component {

    render() {
        return (
            <Provider store={store}>
                <Root>
                    <TodoAppRedux />
                </Root>
            </Provider>
        );
    }
}