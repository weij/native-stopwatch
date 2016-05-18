import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';

class StopWatch extends Component {
  render(){
    return <View style={style.container}>
      <View style={[style.header, this._border('yellow')]}>  
        <View style={this._border('red')}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={this._border('green')}>  
          {this._renderStartStopButton()}
          {this._renderLapButton()}
        </View>
      </View>
      <View style={[style.footer, this._border('blue')]}>
        <Text>
          list of laps
        </Text>
      </View>  
    </View>
  }

  _renderStartStopButton(){
    return <View>
      <Text>
        Start
      </Text>
    </View>
  }

  _renderLapButton(){
    return <View>
      <Text>
        Lap
      </Text>
    </View>
  }

  _border(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }  
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch );