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
        Accessories,
        Footer,
    } from "./styles";  
import { StatusBar } from "react-native"; 
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";

import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Props{
    car: CarDTO
}

export function CarDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Props;
    
    function handlerShowScheduling(){
        navigation.navigate({name: 'Scheduling', params: {car}});
    }

    function handlerGoBack(){
        navigation.goBack();
    }
    return(
        <Container>
            <StatusBar
                barStyle='light-content'
            />
            <Header>
                <BackButton 
                    onPress={handlerGoBack}
                />
            </Header>
            <CarImages>
                <ImageSlider 
                    imageUrl={car.photos}
                />
            </CarImages>
            <Content>
                <Details>
                    <Description>
                        <Brand>{ car.brand }</Brand>
                        <Name>{ car.name }</Name>
                    </Description>

                    <Rent>
                        <Period>{ car.rent.period }</Period>
                        <Price>R$ ${ car.rent.price }</Price>
                    </Rent>
                </Details>
                <Accessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory 
                                key={accessory.type}
                                name={accessory.name} 
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        ))
                    }
                </Accessories>
                <About>{car.about}</About>
            </Content>
            <Footer>
                <Button title={"Escolher período do aluguel"} onPress={handlerShowScheduling} />
            </Footer>
        </Container>
    )
}