import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';

<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

const HomeScreen = ({ navigation }) => {
    
    return (
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Home Screen </Text>
            <Button 
                title="Pakaian Adat"
                onPress={()=> navigation.navigate('Pakaian')}
            />
            <Button 
                title="About"
                onPress={()=> navigation.navigate('About')}
            />
            <Button 
                title="Exit"
                onPress={()=> navigation.navigate('Exit')}
            />

        </View>
        
    );
};

export default HomeScreen;