import React from 'react';
import { StyleSheet, Text, View, Alert,TouchableOpacity, ScrollView,TextInput ,KeyboardAvoidingView} from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import { Font, AppLoading } from "expo";
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import DialogInput from 'react-native-dialog-input';
import { List, ListItem } from "react-native-elements";

import Note from './notes.js';


export default class all extends React.Component {
      constructor(props){
        super(props);
        this.state = {
            loading: true,
            noteArray: [],
            noteText:'',
            checked: ''
        };
    }
    
      async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
      }
      /*
      handleChangedText = (typedText)=>{ //funcion para agregar texto a array
          this.setState({inputText: typedText});
          SampleArray.push(this.state.inputText.toString()); //Agregar al Arraylist
          Alert.alert(SampleArray.toString());
      }

      closeDialogWindows = () =>{
          this.setState({isDialogVisible: false})
      }
 
      
      addItemsToArray=()=>{ //CORE FUNCTION
          SampleArray.push(this.state.inputText.toString()); //Agregar al Arraylist
          Alert.alert(SampleArray.toString());
      }
      

      viewArray =(item) =>{
         Alert.alert(item);
      }
      */
      
    render(){
        if (this.state.loading) {
            return <Expo.AppLoading />;
          }

          let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}
                    checkMethod={()=>this.toggleCheck(key)}
                    />
        })

        return(  
            <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Container>
                <Header>
                    <Body style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                        <Title >To Do App - Reactive Tools</Title>
                    </Body>
                </Header>
                <ScrollView style={StyleSheet.scrollContainer}>
                    {notes}
                </ScrollView>


                <View style={styles.footer}>
                <TextInput
                     style={styles.textInput}
                     placeholder='>Tarea'
                     onChangeText={(noteText)=> this.setState({noteText})}
                     value={this.state.noteText}
                     placeholderTextColor='white'
                     underlineColorAndroid='transparent'>
                </TextInput>
                </View>
                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
                
                

            </Container> 
            
            </KeyboardAvoidingView>
            
        )
    }
    addNote=()=>{
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'note': this.state.noteText,
                'checked':this.setState.checked=true
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({noteText:''});
            this.setState({checked:false});
        }
    }
    deleteNote=(key)=>{
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
    }

    toggleCheck = (id) => {
        let newList = this.state.noteArray;
        let index = newList.findIndex(x => x.id == id);
        if (newList[index].checked) {
          newList[index].checked = false;
        } else {
          newList[index].checked = true;
        }
    
        this.setState({ noteArray: this.state.noteArray });
      };

    
}



 const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});

//<ActionButton style={styles.addButton} onPress={() => this.setState({})}/> 
/*
 {SampleArray.map((item,key)=>(
<Text key={key} onPress={ this.viewArray.bind(this, item) }> { item } </Text>)
    )}

    <TouchableOpacity onPress={() =>this.addNote.bind.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>  


*/