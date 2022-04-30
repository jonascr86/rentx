import React, { useEffect, useState } from 'react'
import {Alert, StatusBar} from 'react-native'
import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
} from './styles'

import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO'
import { Loading } from '../../components/Loading'

export function Home(){
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const CarData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent:{
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png',
    }
    const navigation = useNavigation();
    function handlerShowCarDetail(){
        navigation.navigate({key: 'CarDetails'});
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
                        onPress={handlerShowCarDetail}
                    />}
                />
            }
            
        </Container>
    )
}