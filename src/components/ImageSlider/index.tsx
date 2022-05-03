import React from "react";
import { FlatList } from "react-native-gesture-handler";
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
                {
                    imageUrl.map((_, index) => (
                        <ImageIndex active={true} key={String(index)}/>
                    ))
                }
            </ImageIndexs>
                <FlatList 
                    data={imageUrl}
                    keyExtractor={key => key}
                    renderItem={({item}) => (
                        <CarImageWrapper>
                            <CarImage 
                                source={{uri: item}}
                                resizeMode="contain"
                            />
                        </CarImageWrapper>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
        </Container>
    )
}