import React, { useState } from 'react'
import { Row, Spacing } from '../../components/Container';
import AppButton from '../../components/AppButton';

export default function HomeTopButtons({onChangedValue}) {
    const [selected, setSelected] = useState(1);

   handleTabSelected = (value) =>{
      setSelected(value)
      onChangedValue(value)
   }
  return (
    <Row justifyContent={'space-between'} width={'100%'}>

        <AppButton
         isOutlined={selected !== 1} 
         textButton={'Agendadas'} 
         flex={1} 
         isCompact={true}
         onTap={() => {
            handleTabSelected(1)
         }}
         />

        <Spacing widht={'5px'} />

        <AppButton
         isOutlined={selected !== 2} 
         textButton={'Realizadas'} 
         flex={1} 
         isCompact={true}
         onTap={() => {
            handleTabSelected(2)
         }}
         />

        <Spacing widht={'5px'} />

        <AppButton 
        isOutlined={selected !== 3} 
        textButton={'Canceladas'} 
        flex={1} 
        isCompact={true}
        onTap={() => {
            handleTabSelected(3)
         }}
        />

    </Row>
  )
}