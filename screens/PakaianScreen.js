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
        {title:"Sulawesi Utara", Description: "Sulut", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/05/Pakaian-Adat-Bolaang-Mangondow-1.jpg"},
        {title:"Sulawesi Tengah", Description: "Sulteng",  color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Suku-Kaili-Sulawesi-Tengah-1.jpg"},
        {title:"Sulawesi Selatan", Description: "Desc" ,  color:"#d62044", image:"https://i0.wp.com/hownesia.com/wp-content/uploads/2019/03/pakaian-adat-toraja-764942077.jpg?fit=800%2C526&ssl=1"} ,
        {title:"Sulawesi Tenggara", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sulawesi-Tenggara-1.jpg"},
        {title:"DKI Jakarta", Description: "Desc", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Barat-1.jpg"} ,
        {title:"Jawa Tengah", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Tengah-1.jpg"} ,
        {title:"Jawa Timur", Description: "Desc", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Jawa-Timur-1.jpg"} ,
        {title:"Yogyakarta", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Yogyakarta-1.jpg"} ,
        {title:"Sumatera Utara", Description: "Desc" , color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sumatera-Utara-2.jpg"} ,
        {title:"Kalimantan Barat", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kalimantan-Barat-1.jpg"} ,
        {title:"Aceh", Description: "Desc", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Aceh-2.jpg"} ,
        {title:"Riau", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kepulauan-Riau-2.jpg"} ,
        {title:"Lampung", Description: "Desc", color:"#d62044", image:"Lampung", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Lampung-1.jpg"} ,
        {title:"Gorontalo", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Gorontalo-1.jpg"} ,
        {title:"Maluku", Description: "Desc", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Maluku-baju-cele-1.jpg"} ,
        {title:"Bali", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Bali-dewasa-dan-anak-1.jpg"} ,
        {title:"NTB", Description: "Desc", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-adat-Nusa-Tenggara-Barat-1.jpg"} ,
        {title:"Papua Barat", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Papua-Barat-1.jpg"} ,
        {title:"Banten", Description: "Desc", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Banten-1.jpg"} ,
        {title:"Jambi", Description: "Desc", color:"#f5f12f", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Jambi-1.jpg"} ,
        {title:"Bangka Belitung", Description: "Desc", color:"#d62044", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Bangka-Belitung-1.jpg"} ,
      ]
    };
  }
  clickListener = (screenName) => {
    this.props.navigation.navigate(screenName);
  }

  openDescription = (screenNama) => {
    this.props.navigation.navigate(screenNama)
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
              <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.openDescription(item.Description)}}>
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
    marginTop:0,
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
    height: 100,
    width: 100,
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
    color:"#d62044",
  },
  icon:{
    height: 40,
    width: 40, 
  }
});     