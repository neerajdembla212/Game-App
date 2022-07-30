import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from './components/Typography';

const backgroundImage = require('./assets/bg_startPage.png');

export const HomeScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <ImageBackground
            source={backgroundImage}
            resizeMode='cover'
            style={styles.image}
        >
            <View style={styles.textContainer}>
                <Typography text='The game is on.' style='heading'></Typography>
                <Typography
                    text='Test your wits with our daily live quiz shows and win cash! Free quizzes of a variety of themes updated daily for all you brainiacs out there.'
                    style='normal'></Typography>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                {/* <Button title='Sign up' color='#FFFFFF' accessibilityLabel='Sign up'/> */}
            </View>
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 48,
        color: '#FFFFFF',
        fontWeight: 'bold',
        lineHeight: 50,
        marginBottom: 10
    },
    textContainer: {
        padding: 20,
        flexDirection: 'column',
        alignContent : 'flex-end'
    },
    smallText: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 20
    },
    button: {
        backgroundColor: '#F9DC30',
        color: '#000000',
        width: '80%',
        justifyContent: 'center',
        height: 50,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 30,
        textAlign: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})