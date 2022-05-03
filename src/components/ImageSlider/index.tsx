import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
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

interface ItemViwableprops{
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export function ImageSlider({imageUrl}: Props){

    const [indexImage, setImageIndex] = useState(0);

    const indexChanged = useRef((info: ItemViwableprops) => {
        const index = info.viewableItems[0].index;
        setImageIndex(index);
    })
    
    return(
        <Container>
            <ImageIndexs>
                {
                    imageUrl.map((_, index) => (
                        <ImageIndex 
                            active={index === indexImage} 
                            key={String(index)}
                        />
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
                    onViewableItemsChanged={indexChanged.current}
                />
        </Container>
    )
}