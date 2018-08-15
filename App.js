import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Switch, Picker, Button} from 'react-native';
import moment from 'moment';
import TimePicker from 'react-native-modal-datetime-picker';


class App extends React.Component {
  state = {
    hour: null,
    minute: null,
    session: 'AM',
    result: '',
    showResult: false,
    isDateTimePickerVisible: false,
  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    let pickDate = new Date(date);
    console.log('Sub time: ', date.getTime() - 1);
  };

  handlePickHour = (hour) => {
    this.setState({
      hour: hour
    });
    console.log("hour: " + hour);
  };
  handlePickMinute = (minute) => {
    this.setState({
      minute: minute
    });
    console.log("minute: " + minute);
  };
  handlePickSession = (session) => {

    this.setState({
      session: session
    });
    console.log("session: " + session);
  };
  handleCalculateTime = () => {
    console.log("hour: " + this.state.hour + "----" + "minute: " + this.state.minute + "----" + "session: " + this.state.session);
    this.setState({
      result: "hour: " + this.state.hour + "----" + "minute: " + this.state.minute + "----" + "session: " + this.state.session,
      showResult: true
    })
    let pickTime = new Date();
    console.log("pickTime "+pickTime)
    // const a = '10';
    // const b = '15';
    // const timeNow =
    //   `${a}:${b}`
    var endYear = new Date(pickTime.getFullYear(), pickTime.getMonth(), pickTime.getDate(), 23, 59, 59, 999); // Set day and month

    console.log(timeNow.subtract(1, 'hour')
    );
  }

  render()
  {
    return (
      <View style={styles.appPadding}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <TimePicker
          mode= 'datetime'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    )
  }
}

const
  StyleApp = {
    paddingTop: 100
  }

const
  styles = StyleSheet.create({
    container: {
      padding: 10,
      marginTop: 30,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
    },
    appPadding: {
      paddingTop: 30
    },
    inputStyle: {
      padding: 10,
      margin: 10
    },
    text: {
      color: '#4f603c'
    }
  })

export default App;