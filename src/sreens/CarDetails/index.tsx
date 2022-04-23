import React from "react";
import { BackButton } from "../../components/BackButton";

import { 
        Container, 
        Header, 
        CarImages,
        Content,
        Details,
        Description,
        Brand,
        Name,
        Rent,
        Period,
        Price,
        About,
        Acessories,
        Footer,
    } from "./styles";  
import { StatusBar } from "react-native"; 
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'
import { Button } from "../../components/Button";

export function CarDetails(){
    return(
        <Container>
            <StatusBar
                barStyle='light-content'
            />
            <Header>
                <BackButton 
                    onPress={() => {}}
                />
            </Header>
            <CarImages>
                <ImageSlider 
                    imageUrl={['https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png']}
                />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborguini</Brand>
                        <Name>Uracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>
                <Acessories>
                    <Accessory name="380Km/h" icon={SpeedSvg}/>
                    <Accessory name="3.2s" icon={AccelerationSvg}/>
                    <Accessory name="800 HP" icon={ForceSvg}/>
                    <Accessory name="Gasolina" icon={GasolineSvg}/>
                    <Accessory name="Auto" icon={ExchangeSvg}/>
                    <Accessory name="2 pessoas" icon={PeopleSvg}/>
                </Acessories>
                <About>
                    Este é automóvel desportivo. 
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza 
                    de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
            <Footer>
                <Button title={"Confirmar"}/>
            </Footer>
        </Container>
    )
}