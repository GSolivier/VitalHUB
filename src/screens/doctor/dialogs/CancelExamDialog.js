import React from 'react'
import AppButton, { LinkButton } from '../../../components/AppButton';
import { Flex, TextAlign, TextDecoration } from '../../../settings/AppEnums';
import { Spacing } from '../../../components/Container';
import { TextMedium, TitleMedium } from '../../../settings/AppFonts';
import translate from '../../../locale';
import AppLocalizations from '../../../settings/AppLocalizations';
import AppDialog from '../../../components/AppDialog';


export default function CancelExamDialog({ visible, onClose, appointment }) {

    return (
        <AppDialog
        visible={visible}
        >
            <TitleMedium textAlign={TextAlign.center} size={20}>{translate(AppLocalizations.cancelExam)}</TitleMedium>
            <Spacing height={15} />
            <TextMedium textAlign={TextAlign.center}>{translate(AppLocalizations.cancelExamHint)}</TextMedium>
            <Spacing height={30} />
            <AppButton textButton={translate(AppLocalizations.confirm).toUpperCase()} onTap={() => console.log(appointment)} />
            <Spacing height={30} />
            <LinkButton
                text={translate(AppLocalizations.cancel)}
                textDecoration={TextDecoration.underline}
                alignSelf={Flex.alignSelf.center}
                onTap={onClose}
            />
        </AppDialog>
    )
}