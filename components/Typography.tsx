import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

interface TypographyProps {
    style: 'heading' | 'subHeading' | 'normal',
    text: string
}

export const Typography: FC<TypographyProps> = ({ style, text }) => {
    function getStyle() {
        switch (style) {
            case 'heading': return styles.heading;
            case 'subHeading': return styles.subHeading;
            case 'normal': return styles.normal;
            default: return styles.normal;
        }
    }
    return <Text style={getStyle()}>{text}</Text>
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 48,
        color: '#FFFFFF',
        fontWeight: 'bold',
        lineHeight: 50,
        marginBottom: 10
    },
    normal: {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 20
    },
    subHeading: {

    }
})