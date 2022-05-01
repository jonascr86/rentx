import React, { useState } from 'react'
import {Alert, StatusBar} from 'react-native'
import { useTheme } from 'styled-components'
import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import ArrowSvg from '../../assets/arrow.svg'
import { Calendar, DayProps, generateInterval, MakedDateProps } from '../../components/Calendar'
import { useNavigation, useRoute } from '@react-navigation/native'
import {format} from 'date-fns';
import { getPlatformDate } from '../../components/Calendar/getPlataformDate'
import { CarDTO } from '../../dtos/CarDTO'

interface RentalPeriod{
    startFormatted: string;
    endFormatted: string;
}

interface Props{
    car: CarDTO
}

export function Scheduling(){
    const theme = useTheme();
    const navigation = useNavigation();
    const [lastSelectedData, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [makedDate, setMakedDate] = useState<MakedDateProps>({} as MakedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)
    const route = useRoute();
    const { car } = route.params as Props;

    function handlerShowSchedulingDetails(){
        if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
            Alert.alert('Seleciona um intervalo para alugar!')
        }else{
            navigation.navigate({name: 'SchedulingDetails', params: {
                car,
                dates: Object.keys(makedDate)
            }});
        }
    }

    function handlerGoBack(){
        navigation.goBack();
    }
    function handleChangeDate(date: DayProps){
        let start = !lastSelectedData.timestamp ? date : lastSelectedData;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMakedDate(interval)

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })

    }
    return(
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <BackButton 
                    onPress={handlerGoBack}
                    color={theme.colors.shape}
                />
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>
                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.endFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>
            <Content>
                <Calendar 
                    markedDates={makedDate}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={handlerShowSchedulingDetails}/>
            </Footer>
        </Container>
    )
}