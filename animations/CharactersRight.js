
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';

export default class CharactersRight extends React.Component {
    state = {
        heightText: new Animated.Value(300),
    }

    componentDidMount(){
        this.anim()
    }

    anim = () => {
        Animated.timing(this.state.heightText,{
            toValue:0,
            duration:this.props.duration,
            useNativeDriver:false
        }).start()
    }


    render() {
        let arr=[]
        for(let i=0;i<this.props.characters.length;i++){
            arr=[...arr,this.props.characters[i]]
        }
        
        let animText = arr.map((item,i)=>{
            return(
                <Animated.View style={{ alignSelf: 'center', justifyContent: "center", transform:[{translateX:this.state.heightText}] }}>
                    <Text>{item}</Text>
                </Animated.View>
            )
        })
        console.log(animText)

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                <View style={{flexDirection:'row'}}>
               {animText} 
               </View>
                
            </View>
        )
    }
}