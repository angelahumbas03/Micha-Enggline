import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const AboutScreen = () => {

    const myName = 'Final Project Multiplatform';
    const name = <Text>Humbas, Engglin Angela Theresia</Text>;
    const name2 = <Text>Kalalo, Micha Adeleid Tisyana</Text>;

    return (
        <View style={styles.AboutLayout}>
            <View style={styles.column}>
                <Text style={styles.textStyle2}>
                    {myName}
                </Text>
                {name}
                {name2}
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    AboutLayout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 26,
        color: 'blue'
    },
    textStyle2: {
        fontSize: 22,
        color: 'red'
    }
});

export default AboutScreen;


