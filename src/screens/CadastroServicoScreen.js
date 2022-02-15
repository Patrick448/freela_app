import { StatusBar } from 'expo-status-bar';
import {Alert, StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Dimensions, Button } from 'react-native';
import ListItem from '../components/ListItem';
import TextSwitch from '../components/TextSwitch';
import FlatButton from '../components/FlatButton';
import Colors from '../constants/Colors';
import {useState} from 'react'
import FormTextInput from '../components/FormTextInput';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import FormButton from "../components/FormButton";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import AvaliacaoNova from "../model/AvaliacaoNova";
import moment from "moment";
import * as servicosActions from "../store/actions/servicosActions";
import ServicoNovo from "../model/ServicoNovo";


const CadastroServicoScreen = props=> {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    titulo: "",
    descricao: "",
    anunciante: "",
    buscaContratante: false,
    buscaPrestador: true,
    data: "",
    local: "",
    preco: "",
  }

  const onSubmit = async (values) => {
    console.log('values: ')
    console.log(values);

    const servico = new ServicoNovo(values.titulo, values.descricao, props.anunciante,
        values.buscaContratante, values.buscaPrestador, moment(), values.local, values.preco)
    console.log(servico);


    setLoading(true);
    try {
      //await dispatch(servicosActions.registrarServico(servico));
      setLoading(false);
      Alert.alert("Serviço registrado com sucesso!");
    } catch (error) {
      setLoading(false);
      Alert.alert("Falha ao registrar serviço");
      // console.error(error)
    }
  }

  const [switchState, setSwitchState] = useState(0);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) => (
            <View style={{width: '100%', paddingHorizontal: 20,}}>

              <ScrollView contentContainerStyle={{flexGrow:1}}>

                <View style={{paddingBottom:10}}>
                  <TextSwitch
                      text0="Contrate"
                      text1="Ofereça"
                      state={switchState}
                      onSwitch={(state)=> {
                        setSwitchState(state)
                        formikProps.setFieldValue("buscaPrestador", !formikProps.values.buscaPrestador);
                        formikProps.setFieldValue("buscaContratante", !formikProps.values.buscaContratante);
                      }}/>
                </View>

                <View style={{ alignItems:'center'}}>
                  <TextInput
                      onChangeText={formikProps.handleChange('titulo')}
                      onBlur={formikProps.handleBlur('titulo')}
                      value={formikProps.values.titulo}
                      touched={formikProps.touched.titulo}
                      style={styles.titleInput}
                      placeholderTextColor='#AFAFAF'
                      placeholder='Título'
                      autoCapitalize='none'
                      returnKeyType='go'
                      selectionColor={Colors.primaryColor}
                  />
                  <TextInput
                      textAlignVertical='top'
                      multiline={true}
                      onChangeText={formikProps.handleChange('descricao')}
                      onBlur={formikProps.handleBlur('descricao')}
                      value={formikProps.values.descricao}
                      touched={formikProps.touched.descricao}
                      style={styles.descriptionInput}
                      placeholderTextColor='#AFAFAF'
                      placeholder='Descrição'
                      autoCapitalize='none'
                      returnKeyType='go'
                      selectionColor={Colors.primaryColor}
                  />

                  <TextInput
                      keyboardType='numeric'
                      onChangeText={formikProps.handleChange('preco')}
                      onBlur={formikProps.handleBlur('preco')}
                      value={formikProps.values.preco}
                      touched={formikProps.touched.preco}
                      style={styles.valueInput}
                      placeholderTextColor='#AFAFAF'
                      placeholder='Valor'
                      autoCapitalize='none'
                      returnKeyType='go'
                      selectionColor={Colors.primaryColor}
                  />

                  <TextInput
                      textAlignVertical='top'
                      onChangeText={formikProps.handleChange('local')}
                      onBlur={formikProps.handleBlur('local')}
                      value={formikProps.values.local}
                      touched={formikProps.touched.local}
                      style={{...styles.titleInput, marginTop: 15}}
                      placeholderTextColor='#AFAFAF'
                      placeholder='Local'
                      autoCapitalize='none'
                      returnKeyType='go'
                      selectionColor={Colors.primaryColor}
                  />



                </View>

              </ScrollView>

              <View style={{alignItems: 'center', marginVertical: 20}}>
                <FormButton title="Publicar" onPress={() => {
                  formikProps.handleSubmit()
                }} colorBack={Colors.primaryColor} width="50%"></FormButton>
              </View>
            </View>
        )}
      </Formik>
       
    </View>

  );
}

export default CadastroServicoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop:25
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  titleInput:{
    width: "100%",
    height:40,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray,
    fontFamily:'red-hat-regular',
    fontSize:18
  },
  descriptionInput:{
    marginTop:15,
    width: "100%",
    minHeight:120,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray,
    fontFamily:'red-hat-regular',
    fontSize:16
  },
  valueInput:{
    marginTop:15,
    width: "100%",
    height:40,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray,
    fontFamily:'red-hat-regular',
    fontSize:16
  }

});
