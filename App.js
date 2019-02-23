import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      message:"Hello World!"
    };
    this.messageChange = this.messageChange.bind(this)
  };

  messageChange(){
    this.setState({
      message:"Hello Again"
    })
  };



  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', color:"#195bc4", fontSize:20}}>{this.state.message}</Text>
        <Button
            title="TAP THIS"
            onPress={this.messageChange}
            color="#195bc4"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
