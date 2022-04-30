import React from "react";
import { BackButton } from "../../components/BackButton";
import { Feather } from '@expo/vector-icons';

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
        Accessories,
        Footer,
        RentalPeriod,
        CalendarIcon,
        DateInfo,
        DateTitle,
        DateValue,
        RentalPrice,
        RentalPriceLabel,
        RentalPriceDetails,
        RentaPriceQuota,
        RentalPriceTotal,
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
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

export function SchedulingDetails(){
    const theme = useTheme();
    const navigation = useNavigation();

    function handlerShowSchedulingComplete(){
        navigation.navigate('SchedulingComplete');
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
                <Accessories>
                    <Accessory name="380Km/h" icon={SpeedSvg}/>
                    <Accessory name="3.2s" icon={AccelerationSvg}/>
                    <Accessory name="800 HP" icon={ForceSvg}/>
                    <Accessory name="Gasolina" icon={GasolineSvg}/>
                    <Accessory name="Auto" icon={ExchangeSvg}/>
                    <Accessory name="2 pessoas" icon={PeopleSvg}/>
                </Accessories>
                <RentalPeriod>
                    <CalendarIcon>
                        <Feather 
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>25/04/2022</DateValue>
                    </DateInfo>

                    <Feather 
                        name="chevron-right"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>25/04/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>
                
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentaPriceQuota>R$ 580 x3 diárias</RentaPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>
            <Footer>
                <Button 
                    title={"Alugar agora"} 
                    color={theme.colors.success}
                    onPress={handlerShowSchedulingComplete}
                />
            </Footer>
        </Container>
    )
}