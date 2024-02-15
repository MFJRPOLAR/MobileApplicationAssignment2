import React, {useState} from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');

const AddHostScreen = props => {

    const navigation = useNavigation();

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const onHostAdd = () => {
        if (!fullname){
            alert('Please enter your full name.');
            return;
        }
        if (!email){
            alert('Please enter your email address.');
            return;
        }

        try{
            database.addHost(fullname, email);
        }catch (error) {
            console.log('Error adding contact' + error);
        }
        alert(fullname + ' Added!');
    }

  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={fullname}
                onChangeText={value => setFullName(value)}
                style = {styles.name}
                placeholder={'Enter Full Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={email}
                onChangeText={value => setEmail(value)}
                style = {styles.email}
                placeholder={'Enter Email Address'}
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onHostAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddHostScreen;