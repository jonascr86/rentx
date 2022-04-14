import React from 'react'
import {StatusBar} from 'react-native'
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

export function Home(){
    const CarData = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent:{
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png',
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
            <CarList 
                data={[1,2,3,4,5,6]}
                keyExtractor={item => String(item)}
                renderItem={({item}) => <Car data={CarData}/>}
            />
            
        </Container>
    )
}