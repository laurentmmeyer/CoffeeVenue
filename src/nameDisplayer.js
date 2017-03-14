import React, {Component} from 'react';
import {Text, AppRegistry, View, TextInput} from 'react-native';
import Style from './Style';

class name extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'none',
            replacedName: 'none'
        }
    }

    render() {
        return {
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}/>
          <Button onPress={_remplaceName} title="Enter"/>
          <Text style={Style.textStyle}>{this.state.replacedName}</Text>
        }
    }

    _remplaceName(name){
      replacedName = name.replace("en", "an").replace("i", "y");

      this.setState({
            replacedName: replacedName
        })
    }

}

AppRegistry.registerComponent('CoffeeVenue', () => name);
