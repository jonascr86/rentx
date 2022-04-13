import React from 'react'
import {StatusBar} from 'react-native'
import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
} from './styles'

import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car'

export function Home(){
    const CarDataOne = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent:{
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png',
    }
    const CarDataTwo = {
        brand: 'porche',
        name: 'Panamera',
        rent:{
            period: 'ao dia',
            price: 350,
        },
        thumbnail: 'https://img1.gratispng.com/20180704/yoz/kisspng-2014-bmw-3-series-bmw-328-bmw-7-series-car-porsche-panamera-5b3d5a4fa36463.0701901515307474716693.jpg',
    }
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
            <Car 
               data={CarDataOne}
            />
            <Car 
               data={CarDataTwo}
            />
        </Container>
    )
}