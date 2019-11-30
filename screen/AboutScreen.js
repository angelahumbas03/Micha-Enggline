import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const AboutScreen = () => {

    const myName = 'Final Project Multiplatform';
    const helloWorld = <Text>Group by : </Text>;

    return (
        <View>
            <Text style={styles.textStyle}> 
                Humbas, Engglin Angela
                Kalalo, Micha 
            </Text>
            <Text style={styles.textStyle2}>
                {myName}
            </Text>
            {helloWorld}
        </View> 
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'green'
    },
    textStyle2: {
        fontSize: 26,
        color: 'red'
    }
});

export default AboutScreen;


