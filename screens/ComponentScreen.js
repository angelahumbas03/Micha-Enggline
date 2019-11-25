import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

const Pakaian = [
    
{ name: 'Bajang', imageUrl: 'https://www.sejarah-negara.com/wp-content/uploads/2018/05/Pakaian-Adat-Bolaang-Mangondow-1.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Minahasa'},
{ name: 'Laku Tepu', imageUrl: 'https://www.sejarah-negara.com/wp-content/uploads/2018/05/Pakaian-Adat-Minahasa-1.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Sangihe dan Talaud'},
{ name: '', imageUrl: 'https://i0.wp.com/perpustakaan.id/wp-content/uploads/2018/09/baju-adat-bolaang-mongondow-768x519.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Bolaang Mongondow'}
{ name: 'Lanut', imageUrl: 'https://i0.wp.com/perpustakaan.id/wp-content/uploads/2018/09/baju-adat-bolaang-mongondow-768x519.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Bolaang Mongondow'}
{ name: 'Lanut', imageUrl: 'https://i0.wp.com/perpustakaan.id/wp-content/uploads/2018/09/baju-adat-bolaang-mongondow-768x519.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Bolaang Mongondow'}
{ name: 'Lanut', imageUrl: 'https://i0.wp.com/perpustakaan.id/wp-content/uploads/2018/09/baju-adat-bolaang-mongondow-768x519.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Bolaang Mongondow'}
{ name: 'Lanut', imageUrl: 'https://i0.wp.com/perpustakaan.id/wp-content/uploads/2018/09/baju-adat-bolaang-mongondow-768x519.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Bolaang Mongondow'}
{ name: 'Lanut', imageUrl: 'https://i0.wp.com/perpustakaan.id/wp-content/uploads/2018/09/baju-adat-bolaang-mongondow-768x519.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Bolaang Mongondow'}
{ name: 'Lanut', imageUrl: 'https://i0.wp.com/perpustakaan.id/wp-content/uploads/2018/09/baju-adat-bolaang-mongondow-768x519.jpg', Description: 'Deskripsi: Pakaian Adat Sulawesi Utara asal Bolaang Mongondow'}

   
];

const ComponentScreen = () => {
    return (
        
        <FlatList 
            data={Pakaian}
            renderItem={({ item })=>
                
                <View style={styles.textStyle}>
                    <Image 
                        style={{width: 378, height: 340}}
                        source={{uri: item.imageUrl}}
                    />
                    
                    <Button
                        color="#f194ff"
                        title={item.name}
                        onPress={() => Alert.alert(item.Description)}
                    />
                    
                    
                </View>
                }
                
            keyExtractor={item => item.name}
            
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        textAlign: 'center',
        marginVertical: 8,
        flex: 1,
        marginTop: Constants.statusBarHeight,
        marginHorizontal: 16,
    },    
});

export default ComponentScreen;