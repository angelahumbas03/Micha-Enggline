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
            <Image style={styles.productImg} source={{uri:"https://www.sejarah-negara.com/wp-content/uploads/2018/05/Pakaian-Adat-Bolaang-Mangondow-1.jpg"}}/>
            <Text style={styles.name}>Sulawesi Utara</Text>
            <Text style={styles.description}>
            Pakaian Laku Tepu dari suku Sangihe Talaud merupakan pakaian adat Provinsi Sulawesi Utara.
            Pakaian Laku Tepu terbuat dari bahan serat kofo, yaitu sejenis tanaman pisang
            yang mempunyai serat batang yang kuat. Kedua pakaian ini biasanya hanya dikenakan
            pada saat upacara Tulude.
            Pakaian adat Laku tepu merupakan pakaian dengan baju lengan panjang
            dan untaiannya sampai tumit, dilengkapi dengan ikat pinggang disebut popehe,
            penutup kepala disebut paporong, selendang di bahu disebut bandang, dan rok
            rumbai disebut kahiwu. Biasanya dikenakan oleh wanita maupun para pria dengan warna cerah, seperti kuning, merah, ataupun hijau
            </Text>
          </View>

          {/* <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Back</Text>  
            </TouchableOpacity>
          </View>  */}
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