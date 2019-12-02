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
  Button,
} from 'react-native';

export default class ProductDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
          <Text style={styles.name}>Kepulauan Riau</Text>
            <Image style={styles.productImg} source={{uri:"https://i0.wp.com/www.silontong.com/wp-content/uploads/2018/10/Informasi-terkait-dengan-Pakaian-Adat-Bajang-Sulawesi-Utara-yang-Unik.jpg?w=314&ssl=1"}}/> 
            <Text style={styles.name}>Kebaya Labuh dan Teluk Balangga</Text>

            <Text style={styles.description}>
            Kebaya Labuh merupakan pakaian adat wanita yang biasa dikenakan pada saat upacara adat. Selain itu pakaian ini juga digunakan pada banyak kesempatan acara-acara resmi. Pakaian ini bisa digunakan pada saat upacara pernikahan. Di Riau, busana untuk wanita dikenal dengan sebutan Kebaya Labuh. Jenis pakaian adat Kebaya Labuh merupakan salah satu jenis busana kurung yang banyak dipakai oleh masyarakat suku Melayu seperti halnya di Riau ini
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  }
}); 