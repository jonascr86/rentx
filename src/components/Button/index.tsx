import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { 
    Container, 
    Title,
} from "./styles";  

interface Props extends RectButtonProps{
    title: string;
    color?: string;
    enabled?: boolean;
    loading?: boolean;
    onPress:  () => Promise<void>;
}

export function Button({title, color, enabled = true, loading = false, onPress, ...rest}:Props){
    const theme = useTheme()
    return(
        <Container 
            color={color} 
            enabled={enabled}
            style={{opacity: (enabled === false || loading === true) ? .5 : 1}}
            onPress={onPress}
            {...rest}
        >
            {
                loading
                ? <ActivityIndicator color={theme.colors.shape} />
                : <Title>{title}</Title>
            }
        </Container>
    )
}