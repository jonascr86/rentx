import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { CarDTO } from '../../dtos/CarDTO'
import { RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;

    align-items: center;

    background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;

    background-color: ${({theme}) => theme.colors.header};
    
    justify-content: center;
    padding: 25px;

    padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.secundary_600};
    font-size: ${RFValue(30)}px;

    margin-top: 24px;
`;

export const SubTitle = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.secundary_400};
    font-size: ${RFValue(15)}px;

    margin-top: 24px;
`;


export const Content = styled.View`
    width: 100%;
    padding: 0 20px;
`

export const Appointments = styled.View`
    width: 100%;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    padding: 24px 0;
`

export const AppointmentsTitle = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.secundary_400};
    font-size: ${RFValue(15)}px;
`

export const AppointmentsQuantity = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.secundary_500};
    font-size: ${RFValue(15)}px;
`

export const CarWrapper = styled.View`
    margin-bottom: 16px;

`

export const CarFutter = styled.View`
    width: 100%;
    padding: 12px;
    padding-right: 50px;

    margin-top: -10px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.background_secundary};
`


export const CarFutterPeriod = styled.View`
    flex-direction: row;
`

export const CarFutterTitle = styled.Text`
    color: ${({theme}) => theme.colors.text_detail};
    font-family: ${({theme}) => theme.fonts.secundary_500};
    font-size: ${RFValue(10)}px;
`

export const CarFutterDate = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(13)}px;
`

