
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput } from 'react-native';
import Melt from './animations/VerticallyAppear'

export default class Anim_FadeIn extends React.Component {
  state={
    triggerVar:false,
    num2:false
  }
  render() {

    return (
      <View style={{ width: '100%', height: '100%' }}>
        
        <View style={{height:100,width:'100%'}}>
          

        <Melt characters='ABCDE'>
          <Text>ABC</Text>
        </Melt>


        </View>

      </View>
    )
  }
}


//=======================================================
// export default class RotateLogo extends React.Component {
//   state = {
//     rotate: new Animated.Value(0),
//   }

//   anim = () => {
//     Animated.loop(
//       Animated.timing(this.state.rotate,{
//         toValue:360,
//         duration:1000,
//         useNativeDriver:false
//       })
//     ).start()
//   }


//   render() {

//     var spin = this.state.rotate.interpolate({
//       inputRange: [0, 360],
//       outputRange: ['0deg', '360deg']
//     })

//     return (
//       <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>

//         <Animated.View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: "center", transform: [{ rotateZ: spin }] }}>
//           <Image source={require('./assets/images/yingyang.png')}
//             style={{ height: 100, width: 100, alignSelf: 'center' }}
//           />

//         </Animated.View>

//         <TouchableOpacity onPress={()=>this.anim()}>
//           <Text>Start Animation</Text>
//         </TouchableOpacity>


//       </View>
//     )
//   }
// }


//======================================================
// export default class WrongPasswordShakeAnimation extends React.Component {
//   state = {
//     left: new Animated.Value(0),
//   }

//   anim = () => {
//     Animated.sequence([
//       Animated.timing(this.state.left,{
//         toValue:30,
//         duration:100,
//         useNativeDriver:false
//       }),
//       Animated.timing(this.state.left,{
//         toValue:-30,
//         duration:100,
//         useNativeDriver:false
//       }),
//       Animated.timing(this.state.left,{
//         toValue:30,
//         duration:100,
//         useNativeDriver:false
//       }),
//       Animated.timing(this.state.left,{
//         toValue:-30,
//         duration:100,
//         useNativeDriver:false
//       }),
//       Animated.timing(this.state.left,{
//         toValue:0,
//         duration:100,
//         useNativeDriver:false
//       }),
//     ]).start()
//   }


//   render() {

//     return (
//       <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>

//       <Animated.View style={{flexDirection:'row',alignSelf:'center',transform:[{translateX:this.state.left}]}}>
//         <TextInput 
//         placeholder='password'
//         style={{borderWidth:1,width:200}}
//         />
//         <TouchableOpacity style={{width:80,height:50,backgroundColor:'purple',justifyContent:'center'}} onPress={()=>this.anim()}>
//           <Text>Login</Text>
//         </TouchableOpacity>

//         </Animated.View>

//       </View>
//     )
//   }
// }


//=========================================
// export default class AnimatedBackButtons extends React.Component {
//   state = {
//     width: new Animated.Value(30),
//     left: new Animated.Value(0),
//     rotate: new Animated.Value(0),
//     backButton: false
//   }

//   anim = () => {
//     if (this.state.backButton == false) {
//       this.menuTobackbttn_animation()
//       this.setState({ backButton: true })
//     } else {
//       this.backbttnTomenu_animation()
//       this.setState({ backButton: false })
//     }
//   }

//   menuTobackbttn_animation = () => {
//     Animated.parallel([
//       Animated.timing(this.state.width, {
//         toValue: 50,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//       Animated.timing(this.state.left, {
//         toValue: 10,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//       Animated.timing(this.state.rotate, {
//         toValue: 30,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//     ]).start()

//   }

//   backbttnTomenu_animation = () => {
//     Animated.parallel([
//       Animated.timing(this.state.width, {
//         toValue: 30,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//       Animated.timing(this.state.left, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//       Animated.timing(this.state.rotate, {
//         toValue: 0,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//     ]).start()
//   }

//   render() {
//     var negative_spin = this.state.rotate.interpolate({
//       inputRange: [0, 30],
//       outputRange: ['0deg', '-30deg']
//     })
//     var positive_spin = this.state.rotate.interpolate({
//       inputRange: [0, 30],
//       outputRange: ['0deg', '30deg']
//     })

//     return (
//       <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>

//         <TouchableOpacity onPress={() => this.anim()}>

//           <Animated.View style={{ height: 5, width: 30, backgroundColor: 'black', alignSelf: 'center', marginBottom: 5, transform: [{ rotateZ: negative_spin }] }}>

//           </Animated.View>
//           <Animated.View style={{ height: 5, width: this.state.width, backgroundColor: 'black', alignSelf: 'center', marginBottom: 5, left: this.state.left }}>

//           </Animated.View>
//           <Animated.View style={{ height: 5, width: 30, backgroundColor: 'black', alignSelf: 'center', transform: [{ rotateZ: positive_spin }] }}>


//           </Animated.View>
//         </TouchableOpacity>

//       </View>
//     )
//   }
// }

//=========================================
// export default class AnimatedButtons extends React.Component {
//   state = {
//     width: new Animated.Value(200),
//     height: new Animated.Value(150),
//   }

//   pressIn_animation = () => {
//     Animated.parallel([
//       Animated.timing(this.state.width, {
//         toValue: 150,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//       Animated.timing(this.state.height, {
//         toValue: 120,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//     ]).start()

//   }

//   pressOut_animation = () => {
//     Animated.parallel([
//       Animated.timing(this.state.width, {
//         toValue: 200,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//       Animated.timing(this.state.height, {
//         toValue: 150,
//         duration: 1000,
//         useNativeDriver: false
//       }),
//     ]).start()
//   }

//   render() {
//     return (
//       <View style={{width:'100%',height:'100%',justifyContent:'center'}}>


//           <TouchableOpacity onPressIn={() => this.pressIn_animation()} onPressOut={() => this.pressOut_animation()} style={{alignSelf:'center'}} activeOpacity={0.9}>
//             <Animated.View style={{ height: this.state.height, width: this.state.width,backgroundColor:'purple' }}>
//             </Animated.View>
//           </TouchableOpacity>


//       </View>
//     )
//   }
// }

//===========================================================

// export default class SearchIconAnimation extends React.Component {
//   state = {
//     width: new Animated.Value(0)
//   }

//   anim = () => {
//     Animated.timing(this.state.width, {
//       toValue: 200,
//       duration: 1000,
//       useNativeDriver:false
//     }).start()
//   }
//   render() {
//     return (
//       <View>

//         <View style={{ height: 50, width: 200, flexDirection:'row',alignItems:'center' }}>
//           <Animated.View style={{height:50,width:this.state.width}}>
//             <TextInput placeholder='search' style={{ height: 40, width: '100%' }} />
//           </Animated.View>
//           <TouchableOpacity onPress={() => this.anim()}>
//             <Image source={require('./assets/images/search.png')} style={{ alignSelf: 'center', width: 25, height: 25 }} />
//           </TouchableOpacity>
//         </View>


//       </View>
//     )
//   }
// }