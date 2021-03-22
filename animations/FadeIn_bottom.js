
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

export default class FadeIn_bottom extends React.Component {
  state = {
    fadein_bottom:new Animated.Value(60),
    opacity:new Animated.Value(0),
  }

  componentDidMount(){
    this.anim()
  }

  anim = () => {
      Animated.timing(this.state.fadein_bottom,{
        toValue:0,
        duration:this.props.duration,
        useNativeDriver:false
      }).start()
      Animated.timing(this.state.opacity,{
        toValue:1,
        duration:this.props.duration,
        useNativeDriver:false
      }).start()
  }


  render() {
    
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
        <Animated.View style={{  alignSelf: 'center', justifyContent: "center",opacity:this.state.opacity, transform: [{ translateY: this.state.fadein_bottom }] }}>
            {this.props.children}
        </Animated.View>
      </View>
    )
  }
}