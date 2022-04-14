import React from "react";
import { BackButton } from "../../components/BackButton";
import { Container, Header } from "./styles";  
import { StatusBar } from "react-native"; 

export function CarDetails(){
    return(
        <Container>
            <StatusBar
                barStyle='light-content'
            />
            <Header>
                <BackButton 
                    onPress={() => {}}
                />
            </Header>
        </Container>
    )
}