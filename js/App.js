import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { connect } from 'react-redux';

import Splash from './components/Splash';
import AppIntro from './components/AppIntro';
import { Tabs } from './containers';


export const TodoApp = StackNavigator({
    Home: { screen: Splash },
    AppIntro: { screen: AppIntro },
    Tabs: { screen: Tabs }
});


class TodoAppRedux extends Component {

    componentDidMount() {
        BackHandler.addEventListener('backPress', () => {
            const { dispatch, nav } = this.props;
            if (this.shouldCloseApp(nav)) return false;
            dispatch({
                type: 'Navigation/BACK'
            });
            return true;
        });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('backPress');
    }

    shouldCloseApp = (nav) => {
        return nav.index === 0;
    };

    render() {
        return (

            <TodoApp navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}

function mapDisPatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDisPatchToProps)(TodoAppRedux)