import React from 'react';
import {Text,View,StyleSheet,Image,TextInput,Dimensions,TouchableOpacity,Alert,YellowBox,ScrollView} from 'react-native';
// import {createStackNavigator } from 'react-navigation-stack'
import Logo from '../assets/Logo.png'
const {width: WIDTH} = Dimensions.get('window')



export class Registro extends React.Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#a94ade',
        },
      };
    alertas=()=>{
    Alert.alert(
        'Alerta',
        'Recuerde usar revisar su correo dentro de las 24 horas siguientes para confirmar si su cuenta fue autorizada',
        [
          {
            text: 'Cancelar',
            onPress: () => YellowBox.ignoreWarnings(['Warning: ...']),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
        ],
        {cancelable: false},
      );}
    render () {
        return ( 
            <ScrollView style={stilos.fondo}>
                <View style={stilos.logocontenido}>
                <Image source={Logo} style={stilos.logo}/>
                <Text style={stilos.text3}>PARKGIS</Text>
                <Text style={stilos.tetx2}> 
                    Tenga en cuenta el administrador revisara su solicitud y dara aprovación dentro de las 24 horas 
                    siguientes al envio de los datos
                     </Text>
                     </View>
                     <View>
                     <Image sourcre={require('../assets/iconlogin.png')} 
                           // style={stilos.iconos} 
                             />
                         <View>
                         <TextInput style={stilos.input}
                         placeholder='Email'
                         />
                         </View>
                         <View>
                             <Image source={require('../assets/login.png')} 
                             style={stilos.iconos}/>
                         <TextInput style={stilos.input}
                         placeholder='Usuario'
                         /></View>
                         <View>
                             <Image source={require('../assets/contrasena.png')}
                             style={stilos.iconos} />
                         <TextInput style={stilos.input}
                         secureTextEntry={true}
                         placeholder='Contraseña'
                         /></View>
                         <View>
                         <Image source={require('../assets/contrasena.png')} 
                         style={stilos.iconos}/>
                         <TextInput style={stilos.input}
                         secureTextEntry={true}
                         placeholder='Repita Contraseña'
                         /></View>
                     </View>
                     <View>
                         <TouchableOpacity style={stilos.Registro}  onPress={this.alertas}>
                         <Image source={require('../assets/nota.png')} style={stilos.iconRegis} />
                             <Text style={stilos.text}>REGISTRARSE </Text>
                         </TouchableOpacity>
                     </View>
            </ScrollView>
        );
    }
}
const stilos = StyleSheet.create ({
    fondo:{
        flex:1,
        alignContent:'center',
        backgroundColor:'#a94ade'
    },
    logo:{
        width: 120,
        height: 120,
        alignSelf:'center'
    },
    input:{
        fontSize:20,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingLeft: 35,
        marginTop: 15,
        height:35,
        marginHorizontal:20,
        borderRadius:25

    },
    Registro: {
        height:35,
        width: WIDTH -60,
        marginTop: 25,
        borderRadius:25,
        backgroundColor:'#590863',
        alignSelf: 'center'

    },
    text: {
        fontSize:20,
        marginTop: 6,
        alignSelf:'center',
        color:'white',


    },
    tetx2:{
        color:'white',
        fontSize:17,
        textAlign:'center',
        marginTop:20,
        width:WIDTH -15
    },
    text3:{
        fontSize:20,
        marginTop: 2,
        alignSelf:'center',
        color:'white',
        fontWeight:'500'
    },
    logocontenido:{
        alignContent:'center',
        alignSelf:'center'

    },
    iconos:{
        width:24,
        height:24,
        left:25,
        top:43,
        position:'relative'

    },
    iconRegis:{
        width:20,
        height:20,
        left:55,
        position:'absolute',
        top:7
    }

})
module.exports = Registro;