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
    antDesign: 'AntDesign',
    entypo: 'Entypo',
    evilIcons: 'EvilIcons',
    feather: 'Feather',
    fontAwesome: 'FontAwesome',
    fontAwesome5: 'FontAwesome5',
    fontAwesome6: 'FontAwesome6',
    fontisto: 'Fontisto',
    foundation: 'Foundation',
    ionIcons: 'Ionicons',
    materialCommunityIcons: 'MaterialCommunityIcons',
    materialIcons: 'MaterialIcons',
    octicons: 'Octicons',
    simpleLineIcons: 'SimpleLineIcons',
    zocial: 'Zocial'
};

export const IconNames = {
    google: 'google',
    arrowLeft: 'arrowleft',
    close: 'close',
    notifications: 'notifications',
    clock: 'clock',
    calendarCheck: 'calendar-check',
    hospital: 'hospital',
    circleUser: 'circle-user',
}


export function SvgIcon({ iconFamily, name, size = 24, color = "black" }) {
    switch (iconFamily) {
        case IconFamily.antDesign:
            return <AntDesign name={name} size={size} color={color} />;
        case IconFamily.entypo:
            return <Entypo name={name} size={size} color={color} />;
        case IconFamily.evilIcons:
            return <EvilIcons name={name} size={size} color={color} />;
        case IconFamily.feather:
            return <Feather name={name} size={size} color={color} />;
        case IconFamily.fontAwesome:
            return <FontAwesome name={name} size={size} color={color} />;
        case IconFamily.fontAwesome5:
            return <FontAwesome5 name={name} size={size} color={color} />;
        case IconFamily.fontAwesome6:
            return <FontAwesome6 name={name} size={size} color={color} />;
        case IconFamily.fontisto:
            return <Fontisto name={name} size={size} color={color} />;
        case IconFamily.foundation:
            return <Foundation name={name} size={size} color={color} />;
        case IconFamily.ionIcons:
            return <Ionicons name={name} size={size} color={color} />;
        case IconFamily.materialCommunityIcons:
            return <MaterialCommunityIcons name={name} size={size} color={color} />;
        case IconFamily.materialIcons:
            return <MaterialIcons name={name} size={size} color={color} />;
        case IconFamily.octicons:
            return <Octicons name={name} size={size} color={color} />;
        case IconFamily.simpleLineIcons:
            return <SimpleLineIcons name={name} size={size} color={color} />;
        case IconFamily.zocial:
            return <Zocial name={name} size={size} color={color} />;
        default:
            return null;
    }
}