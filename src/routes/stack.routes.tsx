import React from 'react';
import { Home } from '../sreens/Home';
import { CarDetails } from '../sreens/CarDetails';
import { Scheduling } from '../sreens/Scheduling';
import { SchedulingComplete } from '../sreens/SchedulingComplete';
import { SchedulingDetails } from '../sreens/SchedulingDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { MyCars } from '../sreens/MyCars';

const {Navigator, Screen} = createStackNavigator();

export function StackRoute(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name='Home'
                component={Home}
            />
            <Screen 
                name='CarDetails'
                component={CarDetails}
            />
            <Screen 
                name='Scheduling'
                component={Scheduling}
            />
            <Screen 
                name='SchedulingComplete'
                component={SchedulingComplete}
            />
            <Screen 
                name='SchedulingDetails'
                component={SchedulingDetails}
            />
            <Screen 
                name='MyCars'
                component={MyCars}
            />
        </Navigator>
    )    
}