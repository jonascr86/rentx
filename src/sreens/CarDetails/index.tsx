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
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

interface Props{
    car: CarDTO
}

export function CarDetails(){
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Props;
    const scrollY = useSharedValue(0);
    const scrollHandle = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y;
        console.log(event.contentOffset.y)
    })

    const headerStyleAnimation = useAnimatedStyle(() => {
        return{
            height: interpolate(
                scrollY.value,[0, 200], [200, 70], Extrapolate.CLAMP
            )
        }
    })
    
    function handlerShowScheduling(){
        navigation.navigate({name: 'Scheduling', params: {car}});
    }

    function handlerGoBack(){
        navigation.goBack();
    }
    return(
        <Container>
            <StatusBar
                barStyle='dark-content'
                translucent
                backgroundColor="transparent"
            />
            <Animated.View
                style={[headerStyleAnimation]}
            >
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
            </Animated.View>
            <Animated.ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingTop: getStatusBarHeight(),
                }}
                showsVerticalScrollIndicator={false}
                onScroll={scrollHandle}  
            >
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
                <About>
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                    {car.about}
                </About>
            </Animated.ScrollView>
            <Footer>
                <Button title={"Escolher período do aluguel"} onPress={handlerShowScheduling} />
            </Footer>
        </Container>
    )
}