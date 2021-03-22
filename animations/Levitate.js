
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';


// height is extend to which it will go up while levitating, 

export default class Levitate extends React.Component {
    state = {
        levitate: new Animated.Value(0),
        opacityVal:new Animated.Value(0)
    }

    componentDidMount(){
        this.anim()
    }

    anim = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.levitate,{
                    toValue:this.props.height,
                    duration:3000,
                    useNativeDriver:false
                }),
                Animated.timing(this.state.levitate,{
                    toValue:0,
                    duration:3000,
                    useNativeDriver:false
                })
            ])
            
        ).start()

        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.opacityVal,{
                    toValue:0.2,
                    duration:3000,
                    useNativeDriver:false
                }),
                Animated.timing(this.state.opacityVal,{
                    toValue:0,
                    duration:3000,
                    useNativeDriver:false
                })
            ])
            
        ).start()

    }


    render() {

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                <Animated.View style={{ alignSelf: 'center', justifyContent: "center", transform: [{ translateY: this.state.levitate }] }}>
                    {this.props.children}
                    
                </Animated.View>
                <Animated.View style={{height:2,width:this.props.shadowWidth,borderRadius:50,backgroundColor:'gray',alignSelf:'center',top:this.props.height, opacity:this.state.opacityVal}}></Animated.View>
                
            </View>
        )
    }
}