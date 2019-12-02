import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, Image} from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View style={styles.homeLayout}> 
          <View style={styles.column}>
            <TouchableOpacity style={[styles.buttonContainer, styles.pakaianButton]} onPress={() => navigation.navigate('Pakaian')}>
          <Text style={styles.textCentered}>Pakaian Adat</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <TouchableOpacity style={[styles.buttonContainer, styles.videoButton]} onPress={() => navigation.navigate('Video')}>
              <Text style={styles.textCentered}>Video</Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.column}>
            <TouchableOpacity style={[styles.buttonContainer, styles.aboutButton]} onPress={() => navigation.navigate('About')}>
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
      height:120,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginHorizontal: 50,
      marginBottom:5,
      width:300,
      borderRadius:100,
    },

    pakaianButton: {
      backgroundColor: "#d62044",
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
      videoButton: {
        backgroundColor: "#3676f5",
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
        backgroundColor: "#f5f12f",
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