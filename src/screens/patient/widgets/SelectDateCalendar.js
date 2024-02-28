import React, { useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { AppColors } from '../../../settings/AppColors';
import styled from 'styled-components/native';
import { FontFamily } from '../../../settings/AppFonts';
import translate from '../../../locale';
import AppLocalizations from '../../../settings/AppLocalizations';

const CalendarBox = styled.View`
    width: 100%;
`

LocaleConfig.locales['locale'] = {
    monthNames: [
        translate(AppLocalizations.january),
        translate(AppLocalizations.february),
        translate(AppLocalizations.march),
        translate(AppLocalizations.april),
        translate(AppLocalizations.mayFull),
        translate(AppLocalizations.june),
        translate(AppLocalizations.july),
        translate(AppLocalizations.august),
        translate(AppLocalizations.september),
        translate(AppLocalizations.october),
        translate(AppLocalizations.november),
        translate(AppLocalizations.december),
    ],

    monthNamesShort: [
        translate(AppLocalizations.jan),
        translate(AppLocalizations.feb),
        translate(AppLocalizations.mar),
        translate(AppLocalizations.apr),
        translate(AppLocalizations.may),
        translate(AppLocalizations.jun),
        translate(AppLocalizations.jul),
        translate(AppLocalizations.aug),
        translate(AppLocalizations.sep),
        translate(AppLocalizations.oct),
        translate(AppLocalizations.nov),
        translate(AppLocalizations.dec),],

    dayNames: [
        translate(AppLocalizations.sunday),
        translate(AppLocalizations.monday),
        translate(AppLocalizations.tuesday),
        translate(AppLocalizations.wednesday),
        translate(AppLocalizations.thursday),
        translate(AppLocalizations.friday),
        translate(AppLocalizations.saturday),],

    dayNamesShort: [
        translate(AppLocalizations.sun),
        translate(AppLocalizations.mon),
        translate(AppLocalizations.tue),
        translate(AppLocalizations.wed),
        translate(AppLocalizations.thu),
        translate(AppLocalizations.fri),
        translate(AppLocalizations.sat),],

    today: "Hoje"
};

LocaleConfig.defaultLocale = 'locale';

export default function SelectDateCalendar() {

    const [day, setDay] = useState();

    return (
        <CalendarBox>
            <Calendar
                markedDates={{
                    [day]: { selected: true, }
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