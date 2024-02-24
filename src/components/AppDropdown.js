import React, { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list';
import { AppColors } from '../settings/AppColors';
import { Flex, FontFamily } from '../settings/AppEnums';
import SvgIcon, { Icon } from '../assets/icons/Icons';
import { TextBig } from '../settings/AppFonts';
import styled from 'styled-components/native';

export const DropdownBox = styled.View`
        width: 100%;
        gap: 10px;
`

export default function AppDropdown({
    data,
    handleValueSelected,
    placeholder,
    hasLabel = true,
    label = ''
}
) {

    return (
        <DropdownBox>
            {hasLabel ? (<TextBig size={16}>{label}</TextBig>) : null}
            <SelectList
                setSelected={(val) => handleValueSelected(val)}
                data={data}
                save="value"
                search={false}
                dropdownStyles={{
                    backgroundColor: "white",
                    position: "absolute",
                    top: 45,
                    width: "100%",
                    zIndex: 999,
                    borderColor: AppColors.primary,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderTopWidth: 0,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                }}
                dropdownTextStyles={{
                    color: AppColors.primary
                }}
                boxStyles={{
                    borderColor: AppColors.primary,
                    borderRadius: 5,
                    height: 60,
                    borderWidth: 2,
                    alignItems: Flex.alignItems.center,
                }}
                inputStyles={{
                    color: AppColors.primaryV1
                }}
                fontFamily={FontFamily.montSerratBold}
                placeholder={placeholder}
                arrowicon={<SvgIcon name={Icon.arrowDropDown} color={AppColors.primary} />}
            />
        </DropdownBox>
    )
}