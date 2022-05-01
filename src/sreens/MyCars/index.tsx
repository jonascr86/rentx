import React, { useEffect, useState } from 'react'
import {Alert, FlatList, StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {
    Container,
    Header,
    SubTitle,
    Title,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
} from './styles'

import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import { Car } from '../../components/Car'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO'
import { Loading } from '../../components/Loading'
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

interface CarProps{
    id: string;
    user_id: string;
    car: CarDTO;
}

export function MyCars(){
    const theme = useTheme()
    const [cars, setCars] = useState<CarProps[]>([]);
    const [loading, setLoading] = useState(true);
    const userId = 1
    
    const navigation = useNavigation();
    function handlerShowCarDetail(car: CarDTO){
        navigation.navigate({name: 'CarDetails', params: {car}});
    }

    function handleOpenMyCars(){
        navigation.navigate('MyCars');
    }

    function handlerGoBack(){
        navigation.goBack();
    }

    useEffect(() => {
        async function fetchCars(){
            try {
                const response = await api.get(`/schedules_byuser?user_id=${userId}`);
                setCars(response.data);
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        fetchCars()

    }, [])
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
                <SubTitle>
                    Conforto segurança e praticidade
                </SubTitle>
            </Header>
            <Content>
                <Appointments>
                    <AppointmentsTitle>Agendamentos Feitos</AppointmentsTitle>
                    <AppointmentsQuantity>05</AppointmentsQuantity>
                </Appointments>
            </Content>
            {loading ? <Loading /> :
                <FlatList 
                    data={cars}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingRight: 50, padding: 24}}
                    renderItem={({item}) => 
                    <Car 
                        data={item.car}
                        onPress={() => handlerShowCarDetail(item.car)}
                    />}
                />
            }
        </Container>
    )
}