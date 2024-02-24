import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars';
import { AppColors } from '../../../settings/AppColors';
import { FontFamily } from '../../../settings/AppEnums';
import styled from 'styled-components/native';

const CalendarBox = styled.View`
    width: 100%;
`

export default function SelectDateCalendar() {

    const [day, setDay] = useState();

    return (
        <CalendarBox>
        <Calendar
            markedDates={{
                [day]: {selected: true, }
            }}
            onDayPress={day => {
                setDay(day.dateString)
            }}
            
            theme={{
                textSectionTitleColor: AppColors.grayV3,
                dayTextColor: AppColors.grayV3,
                todayTextColor: AppColors.primary,
                selectedDayBackgroundColor: AppColors.primaryV2,
                selectedDayTextColor: AppColors.white,
                textDayFontFamily: FontFamily.quicSandMedium,
                textMonthFontFamily: FontFamily.montSerratBold,
                textDayHeaderFontFamily: FontFamily.quicSandMedium,
                textDayFontSize: 16,
                textMonthFontSize: 20,
                textDayHeaderFontSize: 12
            }}
            hideArrows={true}
            hideExtraDays={false}
            enableSwipeMonths={true}
            showSixWeeks={true}
        />
        </CalendarBox>
    )
}