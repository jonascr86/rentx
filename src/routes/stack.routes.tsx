import React from 'react';
import { Home } from '../sreens/Home';
import { CarDetails } from '../sreens/CarDetails';
import { Scheduling } from '../sreens/Scheduling';
import { SchedulingComplete } from '../sreens/SchedulingComplete';
import { SchedulingDetails } from '../sreens/SchedulingDetails';
import { createStackNavigator } from '@react-navigation/stack';
import { MyCars } from '../sreens/MyCars';
import { Spalsh } from '../sreens/Splash';

const {Navigator, Screen} = createStackNavigator();

export function StackRoute(){
    return(
        <Navigator screenOptions={{headerShown: false}} initialRouteName="Splash" >
            <Screen 
                name='Splash'
                component={Spalsh}
            />
            <Screen 
                name='Home'
                component={Home}
                options={{
                    //desabilitando gestos
                    gestureEnabled: false,
                }}
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