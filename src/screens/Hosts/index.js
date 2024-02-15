import React, {useState, useEffect, Component} from 'react';
import styles from './styles';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Host from '../../components/Host';

import { openDatabase } from 'react-native-sqlite-storage'

const myHostsDB = openDatabase({name: 'MyHosts.db'});
const hostsTableName = 'hosts';


const HostsScreen = props => {

  const navigation = useNavigation();  

  const [hosts, sethosts] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      // declare empty array that will store results of SELECT
      let results = [];
      // declare transaction that will execute SELECT
      myHostsDB.transaction(txn => {
        
        // execute SELECT
        txn.executeSql(
          `SELECT * FROM ${hostsTableName}`, 
          [],
          //callback function to handle results from SELECT
          (_, res) => {
            // get the number of rows selected
            let len = res.rows.length;
            // if more than one row of data was selected 
            if (len > 0){
              // loop through the rows of data
              for (let i = 0; i < len; i++){
                // push a row of data at a time onto results array 
                let item = res.rows.item(i);
                results.push({
                  id: item.id,
                  fullname: item.fullname,
                  email: item.email
                });
              }
              // assign results array to lists state variables
              sethosts(results);
            } else {
              // if no rows of data were selected 
              // assign empty array to lists state variables
              sethosts([]);
            }
          },
          error => {
            console.log('Error getting lists' + error.message);
          },
        )
      });
    });
      return listener;
  });
  

  return (
    <View style={styles.container}>
        <View>
            <FlatList 
                data={hosts}
                renderItem={({item}) => <Host post={item}/>}
            />
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Add Host')}>
                <Text style={styles.buttonText}>Add Host</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default HostsScreen;