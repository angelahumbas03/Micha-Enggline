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
          <Text style={styles.name}>Jawa Tengah</Text>
            <Image style={styles.productImg} source={{uri:"https://i0.wp.com/www.romadecade.org/wp-content/uploads/2018/09/pakaian-adat-jawa-Jawi-Jangkep.jpg?w=800&ssl=1"}}/> 
            <Text style={styles.name}>Jawi Jangkep</Text>
            <Text style={styles.description}>
            Jawi Jangkep secara resmi terdaftar sebagai pakaian adat Provinsi Jawa Tengah. Sama halnya seperti kebaya yang khusus dikenakan oleh kaum perempuan, Jawi Jangkep dikhususkan untuk kaum pria. Pakaian ini berasal dari adat Keraton Kasunanan Surakarta. Jawi Jangkep sendiri memiliki 2 jenis, yaitu Jawi Jangkep dan Jawi Jangkep padintenan (keseharian). Jawi Jangkep mengkhususkan penggunaan atasan hitam yang hanya boleh dikenakan pada acara formal. Sedangkan Jawi Jangkep padintenan mengenakan atasan berwarna selain hitam yang boleh dikenakan pada acara non formal.
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