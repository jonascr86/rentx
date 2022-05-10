import React from 'react'
import { Dimensions, StatusBar, StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'  

import {
    Container,
} from './styles'
const WIDTH = Dimensions.get('window').width;

export function Spalsh(){
    const animated = useSharedValue(0)
    const animatedStyle = useAnimatedStyle(() => {
        return{
            transform: [
                {
                    translateX: withTiming(animated.value, {
                        duration: 500,
                        easing: Easing.bezier
                    }),
                }
            ]
        }
    })
    function handleAnimation(){
        animated.value = Math.random() * (WIDTH - 100);
    }
    return(
        <Container>
            <StatusBar 
                barStyle='light-content'
                backgroundColor="transparent"
                translucent
            />

            <Animated.View style={[styles.box, animatedStyle]} >

            </Animated.View>
            <RectButton
                style={styles.button}
                onPress={handleAnimation}
            >
                <Text style={styles.textButton} >Press</Text>
            </RectButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor: '#FFF',
        width: 100,
        height: 100,
    },
    button:{
        backgroundColor: '#322665',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton:{
        fontSize: 30,
        color: '#FFF',
    }
})