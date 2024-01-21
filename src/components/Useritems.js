import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserItems = () => {
    return (
    <View style ={ styles.container} >
          <Text style ={ styles.txt}>{'name:'}</Text>
          <Text style ={ styles.txt}>{'age:'}</Text>
          <Text style ={ styles.txt}>{'Weight:'}</Text>
    </View >
  );
};

export default UserItems

const styles = StyleSheet.create({})