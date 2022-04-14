import React from "react";
import {
    Container, 
    CarImage,
    CarImageWrapper,
    ImageIndex,
    ImageIndexs
} from './styles'


interface Props{
    imageUrl: string[];
}

export function ImageSlider({imageUrl}: Props){
    return(
        <Container>
            <ImageIndexs>
                <ImageIndex active={true} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
                <ImageIndex active={false} />
            </ImageIndexs>
            <CarImageWrapper>
                <CarImage 
                    source={{uri: imageUrl[0]}}
                    resizeMode="contain"
                />
            </CarImageWrapper>
        </Container>
    )
}