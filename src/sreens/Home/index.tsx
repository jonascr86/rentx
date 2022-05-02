import React, { useEffect, useState } from 'react'
import {Alert, StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
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
                    <TotalCars>
                        Total de 12 carros.
                    </TotalCars>
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
            <MyCarsButton>
                <Ionicons 
                    name='ios-car-sport'
                    size={32}
                    color={theme.colors.shape}
                    onPress={handleOpenMyCars}
                />
            </MyCarsButton>
        </Container>
    )
}