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
} from 'react-native';

export default class Adat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Sulawesi Utara", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/05/Pakaian-Adat-Bolaang-Mangondow-1.jpg"},
        {id:2, title: "Sulawesi Selatan",image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Suku-Kaili-Sulawesi-Tengah-1.jpg"} ,
        {id:3, title: "DKI Jakarta", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/pakaian-adat-pengantin-DKI-Jakarta-betawi-1.jpg"}, 
        {id:4, title: "Sumatera Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Sumatera-Barat-1-768x1225.jpg"}, 
        {id:5, title: "Kalimantan Selatan", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Kalimantan-Selatan-1.jpg"}, 
        {id:6, title: "Jambi", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Jambi-1-248x180.jpg"}, 
        {id:7, title: "Bengkulu", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-pengantin-Bengkulu-1.jpg"}, 
        {id:8, title: "Jawa Barat", image:"https://www.sejarah-negara.com/wp-content/uploads/2018/03/Pakaian-Adat-Pengantin-Jawa-Barat-1.jpg"},
      ]
    };
  }

  // addProductToCart = () => {
  //   Alert.alert('Success', 'The product has been added to your cart')
  // }

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={{uri:item.image}}/>
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/hearts.png'}}/>
                        <Text style={styles.socialBarLabel}>25</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
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
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 250,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});   