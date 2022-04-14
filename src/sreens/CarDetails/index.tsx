import React from "react";
import { BackButton } from "../../components/BackButton";
import { Container, Header, CarImages } from "./styles";  
import { StatusBar } from "react-native"; 
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
        </Container>
    )
}