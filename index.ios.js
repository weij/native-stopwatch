import formatTime from 'minutes-seconds-milliseconds';

import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, AppRegistry } from 'react-native';

class StopWatch extends Component {
  constructor(props){
    super(props);

    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
    }
  }

  render(){
    return <View style={styles.container}>
      <View style={[styles.header, this._border('yellow')]}>  
        <View style={[styles.timerWrapper, this._border('red')]}>
          <Text style={styles.timer}>
            { formatTime(this.state.timeElapsed) }
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this._border('green')]}>  
          {this.renderStartStopButton()}
          {this.renderLapButton()}
        </View>
      </View>
      <View style={[styles.footer, this._border('blue')]}>
          { this.renderLaps() }
      </View>  
    </View>
  }

  _onButtonPress(){
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({ running: false });
      return 
    }
    
    this.setState({
      startTime: new Date()
    })

    this.interval = setInterval(() => {
      this.setState({ 
        timeElapsed: new Date() - this.state.startTime,
        running: true
      });
    }, 30);

  }

  renderStartStopButton(){
    const style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor='gray'
      onPress={this._onButtonPress.bind(this)}
      style={[styles.button, style]}
      >
      <Text>
        { this.state.running ? 'Stop' : 'Start' }
      </Text>
    </TouchableHighlight>
  }

  _onLapButtonPress(){
    const lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap])
    });
  }

  renderLapButton(){
    return <TouchableHighlight 
      style={styles.button}
      underlayColor='gray'
      onPress={this._onLapButtonPress.bind(this)}
      >
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  }

  renderLaps(){
    return this.state.laps.map( (lap, index) => {
      return <View key={index} style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(lap)}
        </Text>
      </View>
    });
  }

  _border(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }  
}

const styles = StyleSheet.create({
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
  },
  stopButton: {
    borderColor: '#cc0000'
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  lapText: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch );