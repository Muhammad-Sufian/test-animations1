
import React from 'react';
import { ScrollView, View, Text, Animated, Image, TouchableOpacity, TextInput, Modal, Dimensions } from 'react-native';

export default class Options extends React.Component {
    state = {
        opacity: new Animated.Value(0),
        modal_open: false,
        move_modal_x: 0,
        move_modal_y: 0,
        modal_height:new Animated.Value(0),
        openAnimComplete:0
    }


    anim = () => {
        
            Animated.spring(this.state.modal_height,{
                toValue:1,
                duration:300,
                useNativeDriver:false
            }).start()
            
    }

    spawnModal = (nativeEvent) => {

        let move_x = nativeEvent.pageX - nativeEvent.locationX
        let move_y = nativeEvent.pageY - nativeEvent.locationY + 60
        this.setState({ move_modal_x: move_x, move_modal_y: move_y, modal_open: true})

        Animated.spring(this.state.modal_height,{
            toValue:(this.props.options.length+1)*50,
            duration:1000,
            useNativeDriver:false
        }).start()
        

        
        

    }

    closeOption=()=>{
        Animated.spring(this.state.modal_height,{
            toValue:0,
            duration:1000,
            useNativeDriver:false
        }).start()
        setTimeout(()=>this.setState({modal_open:false}),1100)
    }


    render() {

        let options = this.props.options.map((item,index) => {
            return (
                <TouchableOpacity style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: 'rgb(250,50,50)', justifyContent: 'center', alignSelf: 'center', marginTop: 10 }}>
                    <Text style={{ alignSelf: 'center', zIndex: 1 }}>{item}</Text>
                </TouchableOpacity>
            )
        })

        return (
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', zIndex: 10, elevation: 10, }}>
                <Modal
                    visible={this.state.modal_open}
                    transparent={true}
                >
                    <Animated.View style={{ backgroundColor: 'transparent', width: 60, left: this.state.move_modal_x, top: this.state.move_modal_y, position: 'absolute',height:this.state.modal_height,overflow:'hidden' }}>
                        {options}
                        <TouchableOpacity onPress={()=>this.closeOption()} style={{ height: 40, width: 40, borderRadius: 30, backgroundColor: 'rgb(250,50,50)', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>
                            <Text style={{ alignSelf: 'center', zIndex: 1 }}>Close</Text>
                        </TouchableOpacity>
                    </Animated.View>


                </Modal>
                <TouchableOpacity onPress={(e) => this.spawnModal(e.nativeEvent)} style={{ height: 60, width: 60, borderRadius: 30, backgroundColor: 'rgb(200,50,50)', justifyContent: 'center', alignSelf: 'center', zIndex: 2 }}>
                    <Text style={{ alignSelf: 'center', zIndex: 1 }}>Option</Text>
                </TouchableOpacity>


            </View>
        )
    }
}