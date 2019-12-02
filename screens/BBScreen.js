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
          <Text style={styles.name}>Sulawesi Utara</Text>
          <Text style={styles.name}>Suku Minahasa</Text>
            <Image style={styles.productImg} source={{uri:"https://i0.wp.com/www.silontong.com/wp-content/uploads/2018/10/Informasi-terkait-dengan-Pakaian-Adat-Bajang-Sulawesi-Utara-yang-Unik.jpg?w=314&ssl=1"}}/>
            
            <Text style={styles.name}>Bajang</Text>
            <Text style={styles.description}>
            Bukan tanpa sebab suku Minahasa memiliki pakaian adat yang menjadi ciri khas dari daerah provinsi Sulawesi Utara. Rupanya suku Minahasa mendiami wilayah di sekitar semenanjung Sulawesi Utara (Sulut). Berdasarkan laporan sejarah, suku tersebut dikenal memiliki peradaban lebih maju daripada suku lainnya pada masa lampau. Beberapa bukti menunjukkan hal tersebut, seperti dari aspek pengetahuan dan keterampilan masyarakat dalam memintal kapas menjadi kain yang lebih nyaman dipakai untuk busana sehari-hari. Pakaian inilah yang disebut dengan nama Bajang.
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