import React from 'react';
// import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Home } from '../sreens/Home';
import { CarDetails } from '../sreens/CarDetails';
import { Scheduling } from '../sreens/Scheduling';
import { SchedulingComplete } from '../sreens/SchedulingComplete';
import { SchedulingDetails } from '../sreens/SchedulingDetails';
import { createStackNavigator } from '@react-navigation/stack';

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
        </Navigator>
        // <Stack.Navigator screenOptions={{headerShown: false}}>
        //     <Stack.Screen 
        //         name='Home'
        //         component={Home}
        //     />
        //     <Stack.Screen 
        //         name='CarDetails'
        //         component={CarDetails}
        //     />
        //     <Stack.Screen 
        //         name='Scheduling'
        //         component={Scheduling}
        //     />
        //     <Stack.Screen 
        //         name='SchedulingComplete'
        //         component={SchedulingComplete}
        //     />
        //     <Stack.Screen 
        //         name='SchedulingDetails'
        //         component={SchedulingDetails}
        //     />
        // </Stack.Navigator>
    )    
}