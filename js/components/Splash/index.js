import React, { Component } from 'react';
import { Text, Container, Toast } from 'native-base';
import { View } from 'react-native';


class Splash extends Component {

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('AppIntro')
        }, 1000)
    }

    render() {
        return (
            <Container>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF'}}>
                    <Text style={{ fontFamily: 'Iowan Old Style', fontSize: 40 }}>Todo App</Text>
                </View>
            </Container>
        )
    }
}

export default Splash;
