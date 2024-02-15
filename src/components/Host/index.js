import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';

const Host = props => {

    const post = props.post;


    const onPress = () => {
        console.log(post.fullname);
        
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex:2}}>
                <Text style={styles.nameLabel}>Full Name</Text>
                <Text style={styles.emailLabel}>Email</Text>
            </View>
            <View style={{flex: 3}}>
                <Text style={styles.name} numberOfLines={1}>{post.fullname}</Text>
                <Text style={styles.email} numberOfLines={1}>{post.email}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Host;