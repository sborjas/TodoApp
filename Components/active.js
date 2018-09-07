import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import { Font, AppLoading } from "expo";
import Note from './notes.js';

export default class active extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
      }
    
      async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
      }
    render(){
        if (this.state.loading) {
            return <Expo.AppLoading />;
          }

          let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}/>
        })
        return(
            <Container>
                <Header>
                    <Body style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                        <Title >To Do App - Reactive Tools</Title>
                    </Body>
                </Header>
                <ScrollView style={StyleSheet.scrollContainer}>
                    {notes}
                </ScrollView>
            </Container>   
        )
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },


});