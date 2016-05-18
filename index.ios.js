import formatTime from 'minutes-seconds-milliseconds';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, AppRegistry } from 'react-native';

class StopWatch extends Component {
  constructor(props){
    super(props);

    this.state = {
      timeElapsed: null
    }
  }

  render(){
    return <View style={style.container}>
      <View style={[style.header, this._border('yellow')]}>  
        <View style={[style.timerWrapper, this._border('red')]}>
          <Text style={style.timer}>
            { formatTime(this.state.timeElapsed) }
          </Text>
        </View>
        <View style={[style.buttonWrapper, this._border('green')]}>  
          {this.renderStartStopButton()}
          {this.renderLapButton()}
        </View>
      </View>
      <View style={[style.footer, this._border('blue')]}>
        <Text>
          list of laps
        </Text>
      </View>  
    </View>
  }

  _onButtonPress(){
    const startTime = new Date();

    setInterval(() => {
      this.setState({ timeElapsed: new Date() - startTime});
    }, 30);

  }

  renderStartStopButton(){

    return <TouchableHighlight
      underlayColor='gray'
      onPress={this._onButtonPress.bind(this)}
      style={[style.button, style.startButton]}
      >
      <Text>
        Start
      </Text>
    </TouchableHighlight>
  }

  renderLapButton(){
    return <View style={style.button}>
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
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00cc00'
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch );