import React from 'react';
import styles from './styles';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MeetingScreen = props => {

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Meeting Added')}>
                <Text style={styles.buttonText}>Add Meeting</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default MeetingScreen;