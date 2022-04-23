import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Header = () => {
  // const [count, setcount] = useState(0);

  // useEffect(() => {
  //   let inter = null;
  //   inter = setInterval(() => {
  //     setcount(Math.random() * 37 + 25);
  //     clearInterval(inter);
  //   }, 1000);

  // return () => {
  //   clearInterval(inter);
  // };
  // });

  return (
    <View style={style.header}>
      <Text style={style.text1}>English(US)</Text>
      <Icon
        name="chevron-down"
        size={10}
        style={StyleSheet.create({marginRight: 8})}
      />
      <Text style={style.text1}>Privacy</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: '#000',
  },
  text1: {
    padding: 4,
    textAlign: 'center',
    color: '#000',
  },
});

export default Header;
