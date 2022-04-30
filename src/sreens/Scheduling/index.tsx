import React from 'react'
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
import { Calendar } from '../../components/Calendar'
import { useNavigation } from '@react-navigation/native'

export function Scheduling(){
    const theme = useTheme();
    const navigation = useNavigation();

    function handlerShowSchedulingDetails(){
        navigation.navigate('SchedulingDetails');
    }

    function handlerGoBack(){
        navigation.goBack();
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
                <Calendar />
            </Content>

            <Footer>
                <Button title='Confirmar' onPress={handlerShowSchedulingDetails}/>
            </Footer>
        </Container>
    )
}