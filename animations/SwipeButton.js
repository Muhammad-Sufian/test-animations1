
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput,PanResponder} from 'react-native';

export default class SwipeButton extends React.Component {
  state = {
    move_x:0,
    on_off:false
  }


  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder:()=>true,
    onPanResponderMove:(nativeEvent,gesture)=>{
        
        let new_x
        if(gesture.dx>0){
            new_x=this.state.move_x+this.props.speed
        }else{
            new_x=this.state.move_x-this.props.speed
        }
        console.log(new_x)
        if(new_x>0 && new_x<(this.props.width-this.props.height)){
            this.setState({move_x:new_x})
        }
        else if(new_x>=(this.props.width-this.props.height)){
            this.setState({move_x:this.props.width-this.props.height,on_off:true})
            this.props.callbackStatus(true)
        }
        else{
            this.setState({move_x:0,on_off:false})
            this.props.callbackStatus(false)
        }
        

    },
    onPanResponderRelease:(nativeEvent,gesture)=>{

    }
  })


  render() {
    
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
        <View style={{  alignSelf: 'center', justifyContent: "center",width:this.props.width,height:this.props.height,borderRadius:this.props.borderRadius, backgroundColor:'#ced4e0' }}>
            <Animated.View {...this.panResponder.panHandlers} style={{height:this.props.height,width:this.props.height,borderRadius:this.props.borderRadius,backgroundColor:this.state.on_off?this.props.buttonOnColor:this.props.buttonOffColor,transform:[{translateX:this.state.move_x}]}}>

            </Animated.View>
        </View>
      </View>
    )
  }
}