import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import HomeCard from './HomeCard';
import { AppAssets } from '../../assets/AppAssets';
import styled from 'styled-components/native';
import { Spacing } from '../../components/Container';

export const DATA = [
    {
        id: '1',
        name: 'Guilherme Sousa',
        age: '22',
        examType: 'Urgente',
        time: '11:00',
        date: '16/02/2024'
    },
    {
        id: '2',
        name: 'Maria Silva',
        age: '35',
        examType: 'Rotina',
        time: '09:30',
        date: '17/02/2024'
    },
    {
        id: '3',
        name: 'João Oliveira',
        age: '45',
        examType: 'Emergência',
        time: '14:15',
        date: '18/02/2024'
    },
     {
        id: '4',
        name: 'Ana Santos',
        age: '28',
        examType: 'Agendado',
        time: '10:45',
        date: '19/02/2024'
    },
    {
        id:'5',
        name: 'Pedro Almeida',
        age: '50',
        examType: 'Urgente',
        time: '13:30',
        date: '20/02/2024'
    },
    {
        id: '6',
        name: 'Carla Lima',
        age: '40',
        examType: 'Rotina',
        time: '08:00',
        date: '21/02/2024'
    },
    {
        id: '7',
        name: 'Mariana Costa',
        age: '32',
        examType: 'Emergência',
        time: '15:45',
        date: '22/02/2024'
    },
    {
        id: '8',
        name: 'Rafaela Fernandes',
        age: '25',
        examType: 'Agendado',
        time: '09:15',
        date: '23/02/2024'
    },
    {
        id: '9',
        name: 'Fernando Gonçalves',
        age: '55',
        examType: 'Urgente',
        time: '12:20',
        date: '24/02/2024'
    },
    {
        id: '10',
        name: 'Lucas Castro',
        age: '30',
        examType: 'Rotina',
        time: '16:00',
        date: '25/02/2024'
    }
];

export const List = styled.View`
    flex: 0.85;
`

export default function AppointmentList() {
    
  return (
    <List>
      <FlatList
        data={DATA}
        renderItem={({item}) => (<HomeCard imagePath={AppAssets.placeholder} name={item.name} age={item.age} examType={item.examType} schedule={item.time}/>)}
        keyExtractor={item => item.id}
      />
      </List>
  )
}