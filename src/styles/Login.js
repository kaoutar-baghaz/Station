import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30,
        size: 22,
        color: "#818181",
        marginRight: 10,
      },
      button: {
        backgroundColor: '#337ab7',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        // fontFamily:"osm",
        paddingLeft:20,
    },
    social_btn:{
        height:55,
        width:'100%',
        borderWidth:1,
        borderRadius:10,
        borderColor:'#ddd',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    social_img:{
        width:20,
        height:20,
        marginRight:10
    }
});

export default styles ;