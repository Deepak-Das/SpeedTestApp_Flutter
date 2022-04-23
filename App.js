import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Header from './componets/Header.js';

const App = () => {
  const [speed, setSpeed] = useState(10);
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    let interval = null;
    if (isActive && count < 6) {
      interval = setInterval(() => {
        setSpeed(Math.floor(Math.random() * 37 + 1));
        // count = count + 1;
        setCount(count + 1);
        console.log(count);
      }, 1000);
    } else {
      setIsActive(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, count]);
  return (
    <View style={style.container}>
      <Header />
      <Image
        source={require('../TestNetSpeed/assets/image/fast.jpeg')}
        style={style.imageView}
      />
      <Text style={style.text1}>Your Internet speed is</Text>
      <View style={style.row}>
        <Text style={style.text2}>{speed}</Text>
        <View>
          <Text style={style.text3}>Mbps</Text>

          <Icon
            name="rotate-right"
            size={20}
            style={style.icon}
            onPress={() => {
              setIsActive(true);
              // count = 0;
              setCount(0);
            }}
          />
        </View>
      </View>
      <View style={style.row2}>
        <Icon name="question" size={40} style={style.icon2} />
        <Icon name="facebook" size={40} style={style.icon2} />
        <Icon name="twitter-square" size={40} style={style.icon2} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    color: '#fff',
  },
  imageView: {
    width: '40%',
    height: 150,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  row2: {
    width: '50%',
    flexDirection: 'row',
    marginTop: 80,
    // backgroundColor: 'yellow',
    justifyContent: 'space-around',
  },

  text1: {
    marginTop: 80,
    color: '#000',
    fontSize: 24,
    fontWeight: '700',
  },
  text2: {
    fontSize: 100,
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
  },
  text3: {
    fontSize: 34,
    marginTop: 22,
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  icon: {
    width: 35,
    // alignSelf: 'center',
    marginLeft: 20,
    color: '#000',
    padding: 8,
    borderWidth: 2,
    borderRadius: 200,
    borderColor: 'lime',
  },
  icon2: {
    alignSelf: 'center',
    marginTop: 10,
    color: 'dimgrey',
  },
});

export default App;
