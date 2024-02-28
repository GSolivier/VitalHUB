import translate from "../locale";
import AppLocalizations from "./AppLocalizations";

export const HomeCardActionType = {
    canceled: 'canceled',
    scheduled: 'scheduled',
    carriedOut: 'carriedOut'
}

export const BottomNavigationRoute = {
    schedule: 'schedule',
    clinic: 'clinic',
    profile: 'profile'
}

export const Flex = {
    auto: 'auto',
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly',
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