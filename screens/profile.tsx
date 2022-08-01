import React from 'react';
import { Button, Text } from 'react-native';

export const ProfileScreen = ({ navigation, route }) => {
    return <>
        <Text>Profile Screen</Text>
        <Button
            title='Go to home'
            onPress={() => {
                navigation.navigate('Home')
            }} />
    </>
}