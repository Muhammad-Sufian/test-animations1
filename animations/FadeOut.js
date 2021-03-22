
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

export default class FadeIn extends React.Component {
  state = {
    opacity:new Animated.Value(1),
  }

  componentDidMount(){
    this.anim()
  }

  anim = () => {
      Animated.timing(this.state.opacity,{
        toValue:0,
        duration:this.props.duration,
        useNativeDriver:false
      }).start()
  }


  render() {
    
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
        <Animated.View style={{  alignSelf: 'center', justifyContent: "center", opacity:this.state.opacity }}>
            {this.props.children}
        </Animated.View>
      </View>
    )
  }
}