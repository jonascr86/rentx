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
    } from "./styles";  
import { StatusBar, Text } from "react-native"; 
import { ImageSlider } from "../../components/ImageSlider";

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
                <About>
                    Este é automóvel desportivo. 
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza 
                    de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    )
}