import React, { Component } from 'react';
import { View, Text, StyleSheet, AppRegistry } from 'react-native';

class StopWatch extends Component {
  render(){
    return <View>
      <Text>
        00:00.00
      </Text>
      {this._renderStartStopButton()}
      {this._renderLapButton()}
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
}

AppRegistry.registerComponent('stopwatch', () => StopWatch );