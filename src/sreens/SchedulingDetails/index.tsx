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
import { Alert, StatusBar } from "react-native"; 
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";

import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import {format} from 'date-fns'
import api from "../../services/api";

interface Props{
    car: CarDTO
    dates: string[];
}

export function SchedulingDetails(){
    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car, dates } = route.params as Props;

    async function handlerShowSchedulingComplete(){
        const scheduleByCar = await api.get(`/schedules_bycars/${car.id}`);

        const unavailable_dates = [
            ...scheduleByCar.data.unavailable_dates,
            ...dates,
        ] 
        
        await api.post(`/schedules_byuser/`, {
            user_id: 1,
            car,
        })

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
        .then(response => navigation.navigate('SchedulingComplete'))
        .catch(() => Alert.alert("Não foi possivel confirmar o agendamento!"))
        
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
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
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
                        <DateValue>{format(new Date(dates[0]), 'dd/MM/yyyy')}</DateValue>
                    </DateInfo>

                    <Feather 
                        name="chevron-right"
                        size={RFValue(24)}
                        color={theme.colors.shape}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>{format(new Date(dates[dates.length - 1]), 'dd/MM/yyyy')}</DateValue>
                    </DateInfo>
                </RentalPeriod>
                
                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentaPriceQuota>R$ {car.rent.price} x{dates.length} diárias</RentaPriceQuota>
                        <RentalPriceTotal>R$ {parseInt(car.rent.price) * parseInt(dates.length)}</RentalPriceTotal>
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