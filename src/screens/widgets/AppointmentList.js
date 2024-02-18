import { FlatList } from 'react-native'
import React from 'react'
import HomeCard from './HomeCard';
import { AppAssets } from '../../assets/AppAssets';
import styled from 'styled-components/native';
import { Spacing } from '../../components/Container';
import { AppColors } from '../../settings/AppColors';

export const List = styled.View`
    flex: 0.9;
`

export default function AppointmentList({DATA, tapAction}) {
    
  return (
    <List>
      <FlatList
        endFillColor={AppColors.white}
        data={DATA}
        renderItem={({item}) => (<HomeCard imagePath={AppAssets.placeholder} name={item.name} age={item.age} examType={item.examType} schedule={item.time} actionTap={() => tapAction(item)} />)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<Spacing height={10}/>}
        contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 5 }}
      />
      </List>
  )
}