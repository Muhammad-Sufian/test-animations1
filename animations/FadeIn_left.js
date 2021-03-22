
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

export default class FadeIn_left extends React.Component {
  state = {
    fadein_left: new Animated.Value(-1000),
  }

  componentDidMount(){
    this.anim()
  }

  anim = () => {
      Animated.spring(this.state.fadein_left,{
        toValue:0,
        useNativeDriver:false
      }).start()
  }


  render() {
    
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
        <Animated.View style={{  alignSelf: 'center', justifyContent: "center", transform: [{ translateX: this.state.fadein_left }] }}>
            {this.props.children}
        </Animated.View>
      </View>
    )
  }
}