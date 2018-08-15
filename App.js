import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Switch, Picker, Button} from 'react-native';
import moment from 'moment';
import TimePicker from 'react-native-modal-datetime-picker';


class App extends React.Component {
  state = {
    hour: null,
    minute: null,
    session: 'AM',
    result: [],
    showResult: false,
    isDateTimePickerVisible: false,

  };
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    let pickDate = new Date(date);
    let lstResult = [];
    lstResult.push(this.getTimeFromMilisecond(date.getTime() - 5400000));
    lstResult.push(this.getTimeFromMilisecond(date.getTime() - 10800000));
    lstResult.push(this.getTimeFromMilisecond(date.getTime() - 16200000));
    lstResult.push(this.getTimeFromMilisecond(date.getTime() - 21600000));
    lstResult.push(this.getTimeFromMilisecond(date.getTime() - 27000000));
    lstResult.push(this.getTimeFromMilisecond(date.getTime() - 32400000));
    console.log('Sub time 1: ', this.getTimeFromMilisecond(date.getTime() - 5400000));
    console.log('Sub time 2: ', this.getTimeFromMilisecond(date.getTime() - 10800000));
    console.log('Sub time 3: ', this.getTimeFromMilisecond(date.getTime() - 16200000));
    console.log('Sub time 4: ', this.getTimeFromMilisecond(date.getTime() - 21600000));
    console.log('Sub time 5: ', this.getTimeFromMilisecond(date.getTime() - 27000000));
    console.log('Sub time 6: ', this.getTimeFromMilisecond(date.getTime() - 32400000));
    this.setState({result: lstResult})
  };

  getTimeFromMilisecond = (milli) => {
    let time = new Date(milli);
    let hours = time.getUTCHours();
    let minutes = time.getUTCMinutes();
    let seconds = time.getUTCSeconds();
    let milliseconds = time.getUTCMilliseconds();
    return hours + ":" + minutes;
  }

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
        {
          this.state.result.map((item, index) => (
            <TouchableOpacity
              key = {item}
              style = {styles.container}
              onPress = {() => alert(item)}
            >

              <Text style = {styles.text}>
                {item}
              </Text>
            </TouchableOpacity>
          ))
        }
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