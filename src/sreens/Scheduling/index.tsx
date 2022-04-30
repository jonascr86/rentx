import React, { useState } from 'react'
import {StatusBar} from 'react-native'
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
import { useNavigation } from '@react-navigation/native'

export function Scheduling(){
    const theme = useTheme();
    const navigation = useNavigation();
    const [lastSelectedData, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [makedDate, setMakedDate] = useState<MakedDateProps>({} as MakedDateProps)

    function handlerShowSchedulingDetails(){
        navigation.navigate('SchedulingDetails');
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
                        <DateValue selected={false}>23/04/2022</DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false}>23/04/2022</DateValue>
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