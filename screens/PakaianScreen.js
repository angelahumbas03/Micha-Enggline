import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';


export default class Pakaian extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1, likes:112, title: "Sulawesi Utara", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sulawesi-Utara-1.jpg"},
        {id:2, likes:130, title: "DKI Jakarta", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/pakaian-adat-pengantin-DKI-Jakarta-betawi-1.jpg"} ,
        {id:3, likes:120, title: "Jawa Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Barat-1.jpg"}, 
        {id:4, likes:134, title: "Yogyakarta", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Yogyakarta-1.jpg"}, 
        {id:5, likes:125, title: "Sumatera Utara", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sumatera-Utara-2.jpg"}, 
        {id:6, likes:113, title: "Kalimantan Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kalimantan-Barat-1.jpg"}, 
        {id:7, likes:145, title: "Aceh", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Aceh-2.jpg"}, 
        {id:8, likes:110, title: "Riau", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kepulauan-Riau-2.jpg"},
        {id:9, likes:120, title: "Lampung", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Lampung-1.jpg"},
        {id:10, likes:130,title: "Gorontalo", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Gorontalo-1.jpg"},
        {id:11, likes:110,title: "Maluku", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Maluku-baju-cele-1.jpg"},
      ]
    };
  }

  clickEventListener = (item) => {
    //Alert.alert('Message', 'Item clicked. '+item.name);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },
});  