// import lib moment
import moment from "moment";
import { StyleSheet } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import styled from "styled-components/native";
import translate from "../../locale";
import AppLocalizations from "../../settings/AppLocalizations";

export const StyledCalendarStrip = styled(CalendarStrip)`
  flex: 0.20;
  width: 100%;

`
moment.updateLocale("pt-br", {
    // Meses
    months: `${translate(AppLocalizations.january)}_${translate(AppLocalizations.february)}_${translate(AppLocalizations.march)}_${translate(AppLocalizations.april)}_${translate(AppLocalizations.mayFull)}_${translate(AppLocalizations.june)}_${translate(AppLocalizations.july)}_${translate(AppLocalizations.august)}_${translate(AppLocalizations.september)}_${translate(AppLocalizations.october)}_${translate(AppLocalizations.november)}_${translate(AppLocalizations.december)}`.split("_"),
    // Abreviação de meses
    monthsShort: `${translate(AppLocalizations.jan)}_${translate(AppLocalizations.feb)}_${translate(AppLocalizations.mar)}_${translate(AppLocalizations.apr)}_${translate(AppLocalizations.may)}_${translate(AppLocalizations.jun)}_${translate(AppLocalizations.jul)}_${translate(AppLocalizations.aug)}_${translate(AppLocalizations.sep)}_${translate(AppLocalizations.oct)}_${translate(AppLocalizations.nov)}_${translate(AppLocalizations.dec)}`.split("_"),
    // Dias da semana
    weekdays: `${translate(AppLocalizations.sunday)}_${translate(AppLocalizations.monday)}_${translate(AppLocalizations.tuesday)}_${translate(AppLocalizations.wednesday)}_${translate(AppLocalizations.thursday)}_${translate(AppLocalizations.friday)}_${translate(AppLocalizations.saturday)}`.split("_"),
    // Abreviação dias da semana
    weekdaysShort: `${translate(AppLocalizations.sun)}_${translate(AppLocalizations.mon)}_${translate(AppLocalizations.tue)}_${translate(AppLocalizations.wed)}_${translate(AppLocalizations.thu)}_${translate(AppLocalizations.fri)}_${translate(AppLocalizations.sat)}`.split("_"),
    // Abreviação dias da semana 
    weekdaysMin: `${translate(AppLocalizations.sun)}_2ª_3ª_4ª_5ª_6ª_${translate(AppLocalizations.sat)}`.split("_")
});


//instância da data atual
const currentDate = new Date();

//define a data inicial como sendo o primeiro dia do mês
const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

//define a data final como sendo o último dia do mês
const endingDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

const styles = StyleSheet.create({
    iconsStyle: {
        display: 'none'
    },
    calendarHeaderStyle: {
        fontSize: 22,
        textAlign: "center",
        alignSelf: 'flex-start',
        color: '#4E4B59',
        fontFamily: "MontserratAlternates_600SemiBold",
        paddingHorizontal: 16
    },
    nameDateStyle: {
        color: "#ACABB7",
        fontSize: 12,
        textTransform: 'capitalize'
    },
    numberDateStyle: {
        color: "#5F5C6B",
        fontSize: 16
    },
    selectedDateNameStyle: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        textTransform: 'capitalize'
    },
    selectedDateNumberStyle: {
        color: "white",
        fontSize: 14
    },
    selectedContainerStyle: {
        backgroundColor: `#60BFC5`
    },
    selectedAnimationStyle: {
        type: "border",
        duration: 200,
        borderWidth: 2,
        borderHighlightColor: "#49B3BA"
    }
})

export default function HomeCalendar() {
    return (
        <StyledCalendarStrip
            // animação e seleção de cada data
            calendarAnimation={{ type: "sequence", duration: 30 }}
            daySelectionAnimation={styles.selectedAnimationStyle}

            // seta esquerda e direita para avançar e voltar(aqui como display none)
            iconLeftStyle={styles.iconsStyle}
            iconRightStyle={styles.iconsStyle}

            // deixa uma marcação default - data atual
            selectedDate={currentDate}
            // dia que começamos a visualizar a barra
            startingDate={moment()}

            //data min e max - início do mês e final do mês
            minDate={startingDate}
            maxDate={endingDate}

            //estilização dos itens que não estão selecionados
            calendarHeaderStyle={styles.calendarHeaderStyle}
            dateNumberStyle={styles.numberDateStyle}
            dateNameStyle={styles.nameDateStyle}

            // estilização do item que está selecionado - efeito do item marcado
            highlightDateNameStyle={styles.selectedDateNameStyle}
            highlightDateNumberStyle={styles.selectedDateNumberStyle}
            highlightDateContainerStyle={styles.selectedContainerStyle}

            //scroll da barra
            scrollable={true}
        />
    )
}