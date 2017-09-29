import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, InputGroup, Input, Button, Text, Icon } from 'native-base';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as todoActions from '../../actions/add';


class AllTodo extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { inputText: '', displayType: 'all' };
    }

    onSubmit = () => {
        if (this.state.inputText) {
            this.props.todoActions.createTodo(this.state.inputText);
        }
    };

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Todo App</Title>
                    </Body>
                </Header>

                    <View
                        style={{
                            alignSelf: 'flex-end',
                            flex: 0,
                            padding: 5,
                            flexDirection: 'row',
                        }}
                    >
                        <InputGroup
                            borderType="underline"
                            style={{ flex: 0.85 }}
                        >
                            <Input
                                placeholder="Type Your Text Here"
                                value={this.state.inputText}
                                onChangeText={inputText => this.setState({ inputText })}
                                onSubmitEditing={() => this.onSubmit()}
                                maxLength={35}
                            />
                        </InputGroup>
                        <Button
                            style={{ flex: 0.15, marginLeft: 15 }}
                            onPress={() => this.onSubmit()}
                        >
                            <Icon style={{ fontSize: 30}} name='add' />
                        </Button>
                    </View>

            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        todoActions: bindActionCreators(todoActions, dispatch)
    };
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTodo);
