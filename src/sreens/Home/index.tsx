import React, { useEffect, useState } from 'react'
import {Alert, StatusBar, StyleSheet, BackHandler} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import Animated, {withSpring, useAnimatedStyle, useSharedValue, useAnimatedGestureHandler} from 'react-native-reanimated';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
    MyCarsButton,
} from './styles'

import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO'
import { Loading } from '../../components/Loading'
import { useTheme } from 'styled-components';

export function Home(){
    const theme = useTheme()
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);

    const positionY = useSharedValue(0)
    const positionX = useSharedValue(0)

    const myCarsButtonStyle = useAnimatedStyle(() => {
        return{
            transform: [
                {translateX: positionX.value},
                {translateY: positionY.value},
            ]
        }
    })

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(event, ctx: any){
            ctx.positionX = positionX.value;
            ctx.positionY = positionY.value;
        },
        onActive(event, ctx: any){
            positionX.value = event.translationX + ctx.positionX;
            positionY.value = event.translationY + ctx.positionY;
        },
        onEnd(){
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        }
    })
    
    const navigation = useNavigation();
    function handlerShowCarDetail(car: CarDTO){
        navigation.navigate('CarDetails', { car });
    }

    function handleOpenMyCars(){
        navigation.navigate('MyCars');
    }

    useEffect(() => {
        async function fetchCars(){
            try {
                const response = await api.get('/cars');
                setCars(response.data);
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            } 
        }
        fetchCars()
    }, [])

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
    }, [])
    return(
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    {
                        !loading &&
                        <TotalCars>
                            Total de {cars.length} carros.
                        </TotalCars>
                    }
                </HeaderContent>
            </Header>
            {loading ? <Loading /> :
                <CarList 
                    data={cars}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => 
                    <Car 
                        data={item}
                        onPress={() => handlerShowCarDetail(item)}
                    />}
                />
            }
            <PanGestureHandler onGestureEvent={onGestureEvent} >
                <Animated.View
                    style={[
                        myCarsButtonStyle,
                        {
                            position: 'absolute',
                            bottom: 13,
                            right: 22,
                        }
                    ]}
                >
                    <ButtonAnimated style={[styles.button, {backgroundColor: theme.colors.main}]} onPress={handleOpenMyCars} >
                        <Ionicons 
                            name='ios-car-sport'
                            size={32}
                            color={theme.colors.shape}
                        />
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    )
}


const styles = StyleSheet.create({
    button:{
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})