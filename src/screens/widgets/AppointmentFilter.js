import React from 'react'
import { Row, Spacing } from '../../components/Container';
import AppButton from '../../components/AppButton';
import translate from '../../locale'
import AppLocalizations from '../../settings/AppLocalizations';
import { Flex, HomeCardActionType } from '../../settings/AppEnums';

export default function AppointmentFilter({ selected, handleTabSelected }) {
   return (
      <Row justifyContent={Flex.justifyContent.spaceBetween} width={'100%'}>

         <AppButton
            isOutlined={selected !== HomeCardActionType.scheduled}
            textButton={translate(AppLocalizations.scheduled)}
            flex={1}
            isCompact={true}
            onTap={() => {
               handleTabSelected(HomeCardActionType.scheduled)
            }}
         />

         <Spacing width={5} />

         <AppButton
            isOutlined={selected !== HomeCardActionType.carriedOut}
            textButton={translate(AppLocalizations.carriedOut)}
            flex={1}
            isCompact={true}
            onTap={() => {
               handleTabSelected(HomeCardActionType.carriedOut)
            }}
         />

         <Spacing width={5} />

         <AppButton
            isOutlined={selected !== HomeCardActionType.canceled}
            textButton={translate(AppLocalizations.canceled)}
            flex={1}
            isCompact={true}
            onTap={() => {
               handleTabSelected(HomeCardActionType.canceled)
            }}
         />

      </Row>
   )
}