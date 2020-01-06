import React from "react";
import { View, Button } from "react-native";

import { SCLAlert } from "react-native-scl-alert";

const CustomAlert = props => {
  return (
    <View style={props.containerStyle}>
      <Button title="Show" onPress={props.onPress} />
      <SCLAlert
        theme={props.theme}
        show={props.state}
        title={props.title}
        subtitle={props.subtitle}
      >
        {props.children}
      </SCLAlert>
    </View>
  );
};

export default CustomAlert;
