import React from 'react'
import { Row, Spacing } from '../../components/Container';
import AppButton from '../../components/AppButton';
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations';
import { Flex } from '../../settings/AppEnums';

export default function HomeTopButtons({selected, handleTabSelected}) {
  return (
    <Row justifyContent={Flex.justifyContent.spaceBetween} width={'100%'}>

        <AppButton
         isOutlined={selected !== 1} 
         textButton={translate(AppLocalizations.scheduled)} 
         flex={1} 
         isCompact={true}
         onTap={() => {
            handleTabSelected(1)
         }}
         />

        <Spacing width={5} />

        <AppButton
         isOutlined={selected !== 2} 
         textButton={translate(AppLocalizations.carriedOut)} 
         flex={1} 
         isCompact={true}
         onTap={() => {
            handleTabSelected(2)
         }}
         />

        <Spacing width={5} />

        <AppButton 
        isOutlined={selected !== 3} 
        textButton={translate(AppLocalizations.canceled)} 
        flex={1} 
        isCompact={true}
        onTap={() => {
            handleTabSelected(3)
         }}
        />

    </Row>
  )
}