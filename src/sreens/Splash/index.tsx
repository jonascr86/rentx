import React, { useEffect } from 'react'

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import { Dimensions } from 'react-native'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'  

import {
    Container,
} from './styles'
import { useNavigation } from '@react-navigation/native';
const WIDTH = Dimensions.get('window').width;


export function Spalsh(){
    const splashAnimated = useSharedValue(0);
    
    const navigation = useNavigation();

    const brandStyle = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimated.value, [0, 50],[1, 0]),
            transform: [{
                translateX: interpolate(splashAnimated.value,[0, 50], [0, -50], Extrapolate.CLAMP)
            }]
        }
    })

    const logoStyle = useAnimatedStyle(() => {
        return{
            opacity: interpolate(splashAnimated.value, [0, 25, 50],[0, .3, 1], Extrapolate.CLAMP),
            transform: [{
                translateX: interpolate(splashAnimated.value,[0, 50], [-50, 0], Extrapolate.CLAMP)
            }]
        }
    })

    function startApp(){
        navigation.navigate('Home');
    }

    useEffect(() => {
        splashAnimated.value = withTiming(50, {duration: 1000}, 
        () => {
            'worklet'
            runOnJS(startApp)();
        }    
        )
    }, [])
    return(
     <Container>
         <Animated.View style={[brandStyle, {position: 'absolute'}]} >
             <BrandSvg width={80} height={50} />
         </Animated.View>
         <Animated.View style={[logoStyle, {position: 'absolute'}]} >
             <LogoSvg width={180} height={20}/>
         </Animated.View>
     </Container>
    )
}