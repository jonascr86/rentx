import React from 'react'
import { Feather } from '@expo/vector-icons'

import { 
        Calendar as CustonCalendar, 
        LocaleConfig,
        CalendarProps,
} from 'react-native-calendars';
import { useTheme } from 'styled-components';
import { ptBR } from './localeConfig';
import { generateInterval } from './generateInterval'

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MakedDateProps{
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disabletouchEvent?: boolean;
    }
}

interface CalendarUserProps{
    markedDates: MakedDateProps;
    onDayPress: CalendarProps
}

interface DayProps{
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

function Calendar({markedDates, onDayPress}: CalendarUserProps){
    const theme = useTheme();
    return(
        <CustonCalendar
            renderArrow={(direction) => 
                <Feather 
                    size={24}
                    color={theme.colors.text}
                    name={direction == 'left' ? "chevron-left" : "chevron-right"}
                />
            }

            headerStyle={{
                backgroundColor: theme.colors.background_secundary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10,
            }}

            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textDayHeaderFontSize: 10,
                textMonthFontFamily: theme.fonts.secundary_600,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}

            firstDay={1}
            minDate={String(new Date())}
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
    )
}

export{
    Calendar,
    MakedDateProps,
    DayProps,
    generateInterval,
}