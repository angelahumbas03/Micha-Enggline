import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {title:"Sulawesi Utara", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Barat-1.jpg"},
        {title:"Sulawesi Tengah", Description: "",  color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Suku-Kaili-Sulawesi-Tengah-1.jpg"},
        {title:"Sulawesi Selatan", Description: "" ,  color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sulawesi-Selatan-1.jpg"} ,
        {title:"Sulawesi Tenggara", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sulawesi-Tenggara-1.jpg"},
        {title:"Jakarta", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Barat-1.jpg"} ,
        {title:"Jawa Tengah", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Tengah-1.jpg"} ,
        {title:"Jawa Timur", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Jawa-Timur-1.jpg"} ,
        {title:"Yogyakarta", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Yogyakarta-1.jpg"} ,
        {title:"Sumatera Utara", Description: "" , color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sumatera-Utara-2.jpg"} ,
        {title:"Kalimantan Barat", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kalimantan-Barat-1.jpg"} ,
        {title:"Aceh", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Aceh-2.jpg"} ,
        {title:"Riau", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kepulauan-Riau-2.jpg"} ,
        {title:"Lampung", Description: "", color:"#f5fcf7F", image:"Lampung", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Lampung-1.jpg"} ,
        {title:"Gorontalo", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Gorontalo-1.jpg"} ,
        {title:"Maluku", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Maluku-baju-cele-1.jpg"} ,
        {title:"Bali", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Bali-dewasa-dan-anak-1.jpg"} ,
        {title:"NTB", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-adat-Nusa-Tenggara-Barat-1.jpg"} ,
        {title:"Papua Barat", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Papua-Barat-1.jpg"} ,
        {title:"Banten", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Banten-1.jpg"} ,
        {title:"Jambi", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Jambi-1.jpg"} ,
        {title:"Bangka Belitung", Description: "", color:"#f5fcf7", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Bangka-Belitung-1.jpg"} ,
      ]
    };
  }
  clickEventListener(item) {
    Alert.alert(item.Description)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor= {(item) => {
            return item.title;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item)}}>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:150,
    flexDirection:'row',
    padding:20,

    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    height: 70,
    width: 70,
  },
  title:{
    fontSize:20,
    flex:1,
    color:"#0d0100",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  khusus:{
    fontSize:4,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     