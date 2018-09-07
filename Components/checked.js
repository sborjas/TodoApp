import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import { Font, AppLoading } from "expo";
import Note from './notes.js';

export default class checked extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            noteArray: [],
            noteText: '',
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
    render(){
        if (this.state.loading) {
            return <Expo.AppLoading />;
          }
        return(
            <Container>
                <Header>
                    <Body style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
                        <Title >To Do App - Reactive Tools</Title>
                    </Body>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Checked</Text>
                </View> 
            </Container> 
        )
    }
    
}

/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  */