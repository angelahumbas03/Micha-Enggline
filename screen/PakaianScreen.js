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

export default class Pakaian extends Component {

  constructor(props) {
    super(props);
    this.state = {

      data: [
        {id:0, likes:112, screen: "Sulut", title: "Sulawesi Utara", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sulawesi-Utara-1.jpg"},
        {id:1, likes:130, screen: "Jakarta", title: "DKI Jakarta", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/pakaian-adat-pengantin-DKI-Jakarta-betawi-1.jpg"} ,
        {id:2, likes:120, screen: "Jabar",title: "Jawa Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Barat-1.jpg"}, 
        {id:3, likes:134, screen: "Jogja",title: "Yogyakarta", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Yogyakarta-1.jpg"}, 
        {id:4, likes:125, screen: "Sumut",title: "Sumatera Utara", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sumatera-Utara-2.jpg"}, 
        {id:5, likes:113, screen: "Kalbar",title: "Kalimantan Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kalimantan-Barat-1.jpg"}, 
        {id:6, likes:145, screen: "Aceh",title: "Aceh", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Aceh-2.jpg"}, 
        {id:7, likes:110, screen: "Riau",title: "Riau", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kepulauan-Riau-2.jpg"},
        {id:8, likes:120, screen: "Lampung",title: "Lampung", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Lampung-1.jpg"},
        {id:9, likes:130, screen: "Gorontalo",title: "Gorontalo", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Gorontalo-1.jpg"},
        {id:10, likes:110,screen: "Sulut",title: "Maluku", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Maluku-baju-cele-1.jpg"},
      ]
    };
  }

  clickEventListener(screenName) {

    this.props.navigation.navigate(screenName)
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[0].color}]} onPress={() => {this.clickEventListener(this.state.data[0].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[0].image}}/>
            <Text style={styles.title}>{this.state.data[0].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[1].color}]} onPress={() => {this.clickEventListener(this.state.data[1].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[1].image}}/>
            <Text style={styles.title}>{this.state.data[1].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[2].color}]} onPress={() => {this.clickEventListener(this.state.data[2].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[2].image}}/>
            <Text style={styles.title}>{this.state.data[2].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[3].color}]} onPress={() => {this.clickEventListener(this.state.data[3].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[3].image}}/>
            <Text style={styles.title}>{this.state.data[3].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[4].color}]} onPress={() => {this.clickEventListener(this.state.data[4].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[4].image}}/>
            <Text style={styles.title}>{this.state.data[4].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[5].color}]} onPress={() => {this.clickEventListener(this.state.data[5].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[5].image}}/>
            <Text style={styles.title}>{this.state.data[5].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[6].color}]} onPress={() => {this.clickEventListener(this.state.data[6].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[6].image}}/>
            <Text style={styles.title}>{this.state.data[6].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[7].color}]} onPress={() => {this.clickEventListener(this.state.data[7].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[7].image}}/>
            <Text style={styles.title}>{this.state.data[7].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[8].color}]} onPress={() => {this.clickEventListener(this.state.data[8].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[8].image}}/>
            <Text style={styles.title}>{this.state.data[8].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[9].color}]} onPress={() => {this.clickEventListener(this.state.data[9].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[9].image}}/>
            <Text style={styles.title}>{this.state.data[9].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, {backgroundColor:this.state.data[10].color}]} onPress={() => {this.clickEventListener(this.state.data[10].screen)}}>
            <Image style={styles.cardImage} source={{uri:this.state.data[10].image}}/>
            <Text style={styles.title}>{this.state.data[10].title}</Text>
        </TouchableOpacity>
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
    backgroundColor:"#346EC9",
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
    fontSize:28,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    marginLeft:40
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
}); 











// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Dimensions,
//   Alert,
//   ScrollView
// } from 'react-native';


// export default class Pakaian extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       modalVisible:false,
//       userSelected:[],
//       data: [
//         {id:1, likes:112, title: "Sulawesi Utara", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sulawesi-Utara-1.jpg"},
//         {id:2, likes:130, title: "DKI Jakarta", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/pakaian-adat-pengantin-DKI-Jakarta-betawi-1.jpg"} ,
//         {id:3, likes:120, title: "Jawa Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Barat-1.jpg"}, 
//         {id:4, likes:134, title: "Yogyakarta", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Yogyakarta-1.jpg"}, 
//         {id:5, likes:125, title: "Sumatera Utara", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Sumatera-Utara-2.jpg"}, 
//         {id:6, likes:113, title: "Kalimantan Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kalimantan-Barat-1.jpg"}, 
//         {id:7, likes:145, title: "Aceh", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Aceh-2.jpg"}, 
//         {id:8, likes:110, title: "Riau", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Kepulauan-Riau-2.jpg"},
//         {id:9, likes:120, title: "Lampung", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Lampung-1.jpg"},
//         {id:10, likes:130,title: "Gorontalo", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Gorontalo-1.jpg"},
//         {id:11, likes:110,title: "Maluku", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Maluku-baju-cele-1.jpg"},
//       ]
//     };
//   }

//   clickEventListener = (item) => {
//     //Alert.alert('Message', 'Item clicked. '+item.name);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList 
//           style={styles.contentList}
//           columnWrapperStyle={styles.listContainer}
//           data={this.state.data}
//           keyExtractor= {(item) => {
//             return item.id;
//           }}
//           renderItem={({item}) => {
//           return (
//             <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
//               <Image style={styles.image} source={{uri: item.image}}/>
//               <View style={styles.cardContent}>
//                 <Text style={styles.name}>{item.name}</Text>
//                 <Text style={styles.count}>{item.count}</Text>
//                 <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
//                   <Text style={styles.followButtonText}>Explore now</Text>  
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity>
//           )}}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     marginTop:20,
//     backgroundColor:"#ebf0f7"
//   },
//   contentList:{
//     flex:1,
//   },
//   cardContent: {
//     marginLeft:20,
//     marginTop:10
//   },
//   image:{
//     width:90,
//     height:90,
//     borderRadius:45,
//     borderWidth:2,
//     borderColor:"#ebf0f7"
//   },

//   card:{
//     shadowColor: '#00000021',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,
//     elevation: 12,

//     marginLeft: 20,
//     marginRight: 20,
//     marginTop:20,
//     backgroundColor:"white",
//     padding: 10,
//     flexDirection:'row',
//     borderRadius:30,
//   },

//   name:{
//     fontSize:18,
//     flex:1,
//     alignSelf:'center',
//     color:"#3399ff",
//     fontWeight:'bold'
//   },
//   count:{
//     fontSize:14,
//     flex:1,
//     alignSelf:'center',
//     color:"#6666ff"
//   },
//   followButton: {
//     marginTop:10,
//     height:35,
//     width:100,
//     padding:10,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius:30,
//     backgroundColor: "white",
//     borderWidth:1,
//     borderColor:"#dcdcdc",
//   },
//   followButtonText:{
//     color: "#dcdcdc",
//     fontSize:12,
//   },
// });  