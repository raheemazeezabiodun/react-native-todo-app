import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import AllTodo from './All';

export const Tabs = TabNavigator({
    All: { screen: AllTodo }
});
