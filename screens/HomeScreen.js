import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View style={styles.homeLayout}> 
          <View style={styles.column}>
            <TouchableOpacity style={[styles.buttonContainer, styles.pakaianButton]} onPress={() => navigation.navigate('Pakian')}>
              <Text style={styles.textCentered}>Pakaian Adat</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.column}>
            <TouchableOpacity style={[styles.buttonContainer, styles.aboutnButton]} onPress={() => navigation.navigate('About')}>
              <Text style={styles.textCentered}>About</Text>
            </TouchableOpacity>
          </View>
        </View>
        
    );
};
const resizeMode = 'center';

const styles = StyleSheet.create({
    homeLayout: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    column: {
      flex: 1,
      width: 100,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      height:150,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      marginHorizontal: 10,
      marginBottom:50,
      width:150,
      borderRadius:100,
    },

    pakaianButton: {
        backgroundColor: "#FFC0CB",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
      aboutButton: {
        backgroundColor: "#778899",
          justifyContent: 'center',
          alignItems: 'center',
        shadowColor: "#FF007F",
        shadowOffset: {
          width: 0,
          height: 9,
        },

        shadowOpacity: 0.50,
        shadowRadius: 12.35,
    
        elevation: 19,
      },
 
  }); 

export default HomeScreen;