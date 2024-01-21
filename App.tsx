import React from 'react';
import {  StyleSheet, View } from 'react-native';
import UserItems from './src/components/useritems';
import { users } from './src/res/Data';

const App = () => {
  const renderUsers = () => {
    const userComponents = users.map(user => {
      return <UserItems name={user.name} age={user.age} Weight={user.Weight} />;
    });
    return userComponents;
    // const onPressHandler = () => {
    //   Alert.alert('Hello', 'Welcome', [{ text: 'OK' }, { text: 'Cansel' }])

  }

  // return (
  // <View style={styles.container}>
  //   <View style={styles.card}>
  //     <Text style={styles.text}>Identity Card</Text>
  //     <View style={styles.infoview}>
  //       <Image source={require('./Photos/user.png')} style={styles.image} />
  //       <View>
  //         <Text style={styles.text}>Hakeem</Text>
  //         <Text style={styles.text}>3/11/2003</Text>
  //       </View>

  //     </View>
  //     <Pressable style={styles.button} onPress={onPressHandler}>
  //       <Text style={styles.text}>Ok</Text>
  //     </Pressable>
  //   </View>
  // </View>

  return (
    <View style={styles.container} >
      {renderUsers()}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  card: {
    width: 400,
    height: 230,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    elevation: 5,
    // justifyContent : 'center',
    alignItems: 'center',
  },
  infoview: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: '80%',
    height: '40%',
    marginTop: 60,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 240,
    color: 'black',
    fontWeight: 'bold',
    // marginRight: 20
  },
  image: {
    // borderWidth: 3,
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: 'blue'
  },
  button: {
    width: 120,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20

  },
  txt: {
    fontSize: 500,
    fontWeight: 'bold',
    borderWidth: 3,
    // padding: 15 ,
    width: 140,
    textAlign: 'center',
    marginTop: 10,
  },
});
