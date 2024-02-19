import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

export const IconFamily = {
    antDesign: AntDesign,
    entypo: Entypo,
    evilIcons: EvilIcons,
    feather: Feather,
    fontAwesome: FontAwesome,
    fontAwesome5: FontAwesome5,
    fontAwesome6: FontAwesome6,
    fontisto: Fontisto,
    foundation: Foundation,
    ionIcons: Ionicons,
    materialCommunityIcons: MaterialCommunityIcons,
    materialIcons: MaterialIcons,
    octicons: Octicons,
    simpleLineIcons: SimpleLineIcons,
    zocial: Zocial
};

export const Icon = {
    google: {
        name: 'google',
        family: IconFamily.antDesign
    },
    arrowLeft: {
        name: 'arrowleft',
        family: IconFamily.antDesign
    },
    close: {
        name: 'close',
        family: IconFamily.antDesign
    },
    notifications: {
        name: 'notifications',
        family: IconFamily.ionIcons
    },
    clock: {
        name: 'clock',
        family: IconFamily.materialCommunityIcons
    },
    calendarCheck: {
        name: 'calendar-check',
        family: IconFamily.fontAwesome6
    },
    hospital: {
        name: 'hospital',
        family: IconFamily.fontAwesome6
    },
    circleUser: {
        name: 'circle-user',
        family: IconFamily.fontAwesome6
    },
    stethoscope: {
        name: 'stethoscope',
        family: IconFamily.antDesign
    },
    star: {
        name: 'star',
        family: IconFamily.antDesign
    },
    calendar: {
        name: 'calendar',
        family: IconFamily.materialCommunityIcons
    },
    arrowDropDown: {
        name: 'sort-down',
        family: IconFamily.fontAwesome5
    },
    cameraPlus: {
        name: 'camera-plus-outline',
        family: IconFamily.materialCommunityIcons
    },
    fileAlert: {
        name: 'file-alert-outline',
        family: IconFamily.materialCommunityIcons
    },
};



export default function SvgIcon({ name, size = 24, color = "black" }) {

    const iconName = name.name;
    const iconFamily = name.family;

    const IconComponent = iconFamily;

    return <IconComponent name={iconName} size={size} color={color} />;

}