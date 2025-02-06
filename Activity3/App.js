import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fixing Bed',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'BreakFast',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Clean the house.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7267',
    title: 'Prepare things for school.',
  },
  {
    id: 'fsj94a0f-3da1-471f-bd96-145571e29d729879',
    title: 'Take a bath',
  },
  {
    id: 'sgfshna0f-3da1-471f-bd96-145571e29d72yj',
    title: 'Cook food for pets',
  },
  {
    id: 'Hjsdjdnf-3da1-471f-bd96-145571e29d7289',
    title: 'Prepare the food for pets',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Go to School',
  },
];
const DATA2 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53sghsh',
    title: 'Eat Lunch',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Study',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Rest',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7267',
    title: 'Scroll to phone',
  },
  {
    id: 'fsj94a0f-3da1-471f-bd96-145571e29d729879',
    title: 'Do the activities or assignments',
  },
  {
    id: 'sgfshna0f-3da1-471f-bd96-145571e29d72yj',
    title: 'Ready to go back home',
  },
  {
    id: 'Hjsdjdnf-3da1-471f-bd96-145571e29d7289',
    title: 'Fix the house',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Eat Supper',
  },
];
const DATA3 = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53sghsh',
    title: 'Ready for Dinner',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Cook Dinner',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Feed the Pets.',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7267',
    title: 'Eat Dinner.',
  },
  {
    id: 'fsj94a0f-3da1-471f-bd96-145571e29d729879',
    title: 'Wash the dishes',
  },
  {
    id: 'sgfshna0f-3da1-471f-bd96-145571e29d72yj',
    title: 'Clean the table ',
  },
  {
    id: 'Hjsdjdnf-3da1-471f-bd96-145571e29d7289',
    title: 'Clean the kitchen',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Clean the body',
  },
  {
   id: '58694a0f-3da1-471f-bd96-145571e29d72ssdd',
    title: 'Ready to Sleep',
  },
];
type ItemProps = {title: string};

const Item1 = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text> Morning</Text>
      <FlatList
        data={DATA1} 
        renderItem={({item}) => <Item1 title={item.title} />}
        keyExtractor={item => item.id}

      />
      <Text> Afternoon</Text>
      <FlatList
        data={DATA2} 
        renderItem={({item}) => <Item1 title={item.title} />}
        keyExtractor={item => item.id}

      />
      <Text> Night</Text>
      <FlatList
        data={DATA3} 
        renderItem={({item}) => <Item1 title={item.title} />}
        keyExtractor={item => item.id}

      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#47BEC3',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
});

export default App;