import React from 'react'
import {
  View,
  Button
} from 'react-native'

import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert'

const CustomAlert = props => {
  ///
  return (
    <View style={props.containerStyle}>
      <Button title="Show" onPress={props.handleOpen} />
      <SCLAlert
        theme="info"
        show={this.state.show}
        title="Lorem"
        subtitle="Lorem ipsum dolor"
      >
        <SCLAlertButton theme="info" onPress={props.handleClose}>Done</SCLAlertButton>
      </SCLAlert>
    </View>

  );
};

export default CustomAlert;