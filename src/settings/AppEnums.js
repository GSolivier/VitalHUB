import translate from "../locale";
import AppLocalizations from "./AppLocalizations";

export const HomeCardActionType = {
    canceled: 'canceled',
    scheduled: 'scheduled',
    carriedOut: 'carriedOut'
}

export const BottomNavigationRoute ={
    schedule: 'schedule',
    clinic: 'clinic',
    profile: 'profile'
}

export const FontFamily ={
    montSerratBold: 'MontserratAlternates_700Bold',
    montSerratMedium: 'MontserratAlternates_500Medium',
    quicSandSemiBold: 'Quicksand_600SemiBold',
    quicSandMedium: 'Quicksand_500Medium'

}

export const Flex = {
    flexDirection: {
        row: 'row',
        rowReverse: 'row-reverse',
        column: 'column',
        columnReverse: 'column-reverse',
    },
    flexWrap: {
        wrap: 'wrap',
        nowrap: 'nowrap',
        wrapReverse: 'wrap-reverse',
    },
    justifyContent: {
        flexStart: 'flex-start',
        flexEnd: 'flex-end',
        center: 'center',
        spaceBetween: 'space-between',
        spaceAround: 'space-around',
        spaceEvenly: 'space-evenly',
    },
    alignItems: {
        flexStart: 'flex-start',
        flexEnd: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
    },
    alignSelf: {
        auto: 'auto',
        flexStart: 'flex-start',
        flexEnd: 'flex-end',
        center: 'center',
        baseline: 'baseline',
        stretch: 'stretch',
    },
}

export const TextDecoration = {
    none: 'none',
    underline: 'underline',
    overline: 'overline',
    lineThrough: 'line-through',
    blink: 'blink',
};

export const TextAlign = {
    left: 'left',
    right: 'right',
    center: 'center',
    justify: 'justify',
    initial: 'initial',
    inherit: 'inherit',
};

export const AppointmentLevelsList = {
    routine: 'routine',
    exam: 'exam',
    urgency: 'urgency'
}

export const AppointmentLevelsButtons = [
    {
        text: translate(AppLocalizations.routine),
        type: AppointmentLevelsList.routine
    },
    {
        text: translate(AppLocalizations.exam),
        type: AppointmentLevelsList.exam
    },
    {
        text: translate(AppLocalizations.urgency),
        type: AppointmentLevelsList.urgency
    }
]

export const AppointmentFilterList = [
    {
        text: translate(AppLocalizations.scheduled),
        type: HomeCardActionType.scheduled
    },
    {
        text: translate(AppLocalizations.carriedOut),
        type: HomeCardActionType.carriedOut
    },
    {
        text: translate(AppLocalizations.canceled),
        type: HomeCardActionType.canceled
    }
]