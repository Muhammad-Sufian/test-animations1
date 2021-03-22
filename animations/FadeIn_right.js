
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

export default class FadeIn_right extends React.Component {
  state = {
    fadein_right:new Animated.Value(1000),
  }

  componentDidMount(){
    this.anim()
  }

  anim = () => {
      Animated.spring(this.state.fadein_right,{
        toValue:0,
        useNativeDriver:false
      }).start()
  }


  render() {
    
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
        <Animated.View style={{  alignSelf: 'center', justifyContent: "center", transform: [{ translateX: this.state.fadein_right }] }}>
            {this.props.children}
        </Animated.View>
      </View>
    )
  }
}