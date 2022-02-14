import { StatusBar } from 'expo-status-bar';
import {Alert, StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Dimensions, Button } from 'react-native';
import ListItem from '../components/ListItem';
import TextSwitch from '../components/TextSwitch';
import FlatButton from '../components/FlatButton';
import Colors from '../constants/Colors';
import { useState } from 'react'
import FormTextInput from '../components/FormTextInput';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

import FormButton from "../components/FormButton";
import {useDispatch} from "react-redux";
import AvaliacaoNova from "../model/AvaliacaoNova";
import moment from "moment";
import DadosPagamentoNovo from "../model/DadosPagamentoNovo";
import * as dadosPagamentoActions from "../store/actions/dadosPagamentoActions";
import { Formik } from "formik";

const PagamentoScreen = props => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    nomeTitular: "",
    numero: "",
    validade: "",
    cvv: "",
    parcelas: "",
    valorParcela: "",
    usuario: "",
  }

  const onSubmit = async (values, actions) => {
    console.log('values: ')
    console.log(values);
    // servico vem por props?
    const dadosPagamento = new DadosPagamentoNovo(values.nomeTitular, values.numero, values.validade,
        values.cvv, values.parcelas, values.valorParcela, values.usuario);
    console.log(dadosPagamento);
    setLoading(true);
    try {
      //await dispatch(dadosPagamentoActions.registrarDadosPagamento(dadosPagamento));
      setLoading(false);
      Alert.alert("Dados de pagamento registrados com sucesso!");
    } catch (error) {
      setLoading(false);
      Alert.alert("Falha no registro de dados de pagamento.");
      // console.error(error)
    }
  }


  const [nameInputText, setNameInputText] = useState("");
  const [cardNumberInputText, setCardNumberInputText] = useState("");
  const [cvvInputText, setCvvInputText] = useState("");

  const [validityInputText, setValidityInputText] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("1x");
  const [items, setItems] = useState([
    {label: '1x 100,00', value: '1x'},
    {label: '2x 50,00', value: '2x'}
  ]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <View style={{ paddingHorizontal: 15, width: '100%' }}>

          <Text style={styles.headerText}>Dados do cartão</Text>

          <Formik initialValues={initialValues}
                  onSubmit={onSubmit}>
            {(formikProps) => (
                <View style={{width: '100%', paddingHorizontal: 5,}}>
                  <TextInput
                      onChangeText={formikProps.handleChange('nomeTitular')}
                      onBlur={formikProps.handleBlur('nomeTitular')}
                      value={formikProps.values.nomeTitular}
                      touched={formikProps.touched.nomeTitular}
                      style={styles.input}
                      placeholderTextColor='#AFAFAF'
                      placeholder='Nome'
                      autoCapitalize='none'
                      returnKeyType='go'
                      selectionColor={Colors.primaryColor}
                  />
                  <TextInput
                      onChangeText={formikProps.handleChange('numero')}
                      onBlur={formikProps.handleBlur('numero')}
                      value={formikProps.values.numero}
                      touched={formikProps.touched.numero}
                      keyboardType='number-pad'
                      style={styles.input}
                      placeholderTextColor='#AFAFAF'
                      placeholder='Número do cartão'
                      autoCapitalize='none'
                      returnKeyType='go'
                      selectionColor={Colors.primaryColor}
                  />

                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChangeText={formikProps.handleChange('validade')}
                        onBlur={formikProps.handleBlur('validade')}
                        value={formikProps.values.validade}
                        touched={formikProps.touched.validade}
                        style={styles.smallInputLeft}
                        placeholderTextColor='#AFAFAF'
                        placeholder='Val'
                        autoCapitalize='none'
                        returnKeyType='go'
                        selectionColor={Colors.primaryColor}
                    />
                    <TextInput
                        onChangeText={formikProps.handleChange('cvv')}
                        onBlur={formikProps.handleBlur('cvv')}
                        value={formikProps.values.cvv}
                        touched={formikProps.touched.cvv}
                        keyboardType='number-pad'
                        style={{...styles.input, width: 70}}
                        placeholderTextColor='#AFAFAF'
                        placeholder='CVV'
                        autoCapitalize='none'
                        returnKeyType='go'
                        selectionColor={Colors.primaryColor}
                    />

                    <View style={{maxWidth:150, marginLeft: 15, marginTop:15}}>
                      <DropDownPicker

                          open={open}
                          value={value}
                          items={items}
                          setOpen={setOpen}
                          setValue={setValue}
                          setItems={setItems}
                          style={{borderColor:Colors.primaryColor,  height:40}}
                      />
                    </View>

                  </View>



                  <View style={{ alignItems: 'center', paddingTop: 25 }}>

                    <FormButton title='Confirmar pagamento' colorBack={Colors.primaryColor} width="50%"></FormButton>

                  </View>
                </View>
            )}
          </Formik>


        </View>


    </View>


  );
}

export default PagamentoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 25
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'red-hat-medium',
    fontSize: 18,
    paddingBottom: 10
  },

  input: {
    marginTop: 15,
    height: 40,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    fontFamily: 'red-hat-regular',
    fontSize: 18
  },

  smallInputLeft: {
    marginRight: 15,
    marginTop: 15,
    flex: 1,
    height: 40,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    fontFamily: 'red-hat-regular',
    fontSize: 18
  },
  smallInputRight: {
    marginLeft: 15,
    marginTop: 15,
    flex: 1,
    height: 40,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    fontFamily: 'red-hat-regular',
    fontSize: 18
  },


  descriptionInput: {
    marginTop: 15,
    //width: "85%", 
    minHeight: 120,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    fontFamily: 'red-hat-regular',
    fontSize: 16
  },
  valueInput: {
    marginTop: 15,
    width: "85%",
    height: 40,
    padding: 5,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    fontFamily: 'red-hat-regular',
    fontSize: 16
  }

});
