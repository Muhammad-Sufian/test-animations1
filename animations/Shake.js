
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

/*
    <Shake trigger={this.state.triggerVar} callback={()=>this.setState({triggerVar:false})}>
          <Text style={{fontSize:20}}>ABCDE</Text>
    </Shake>


    if trigger is true, then it will shake, and after shaking it will set the trigger variable to false in callback function
*/

export default class Shake extends React.Component {
    state = {
        Shake: new Animated.Value(0),
    }

    anim = () => {
        Animated.sequence([
            Animated.timing(this.state.Shake, {
                toValue: 20,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(this.state.Shake, {
                toValue: -20,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(this.state.Shake, {
                toValue: 20,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(this.state.Shake, {
                toValue: -20,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(this.state.Shake, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            })
        ]).start()


    }


    render() {
        if (this.props.trigger == true) {
            this.anim()
            this.props.callback()
        }
        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                <Animated.View style={{ alignSelf: 'center', justifyContent: "center", transform: [{ translateX: this.state.Shake }] }}>
                    {this.props.children}
                </Animated.View>
            </View>
        )
    }
}