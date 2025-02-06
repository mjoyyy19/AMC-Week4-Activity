import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const DATA1 = [
  {
    id: '1',
    title: 'Fixing Bed',
  },
  {
    id: '2',
    title: 'BreakFast',
  },
  {
    id: '3',
    title: 'Clean the house.',
  },
  {
    id: '4',
    title: 'Prepare things for school.',
  },
  {
    id: '5',
    title: 'Take a bath',
  },
  {
    id: '6',
    title: 'Cook food for pets',
  },
  {
    id: '7',
    title: 'Prepare the food for pets',
  },
  {
    id: '8',
    title: 'Go to School',
  },
];
const DATA2 = [
  {
    id: '9',
    title: 'Eat Lunch',
  },
  {
    id: '10',
    title: 'Study',
  },
  {
    id: '11',
    title: 'Rest',
  },
  {
    id: '12',
    title: 'Scroll to phone',
  },
  {
    id: '13',
    title: 'Do the activities or assignments',
  },
  {
    id: '14',
    title: 'Ready to go back home',
  },
  {
    id: '15',
    title: 'Fix the house',
  },
  {
    id: '16',
    title: 'Eat Supper',
  },
];
const DATA3 = [
  {
    id: '17',
    title: 'Ready for Dinner',
  },
  {
    id: '18',
    title: 'Cook Dinner',
  },
  {
    id: '19',
    title: 'Feed the Pets.',
  },
  {
    id: '20',
    title: 'Eat Dinner.',
  },
  {
    id: '21',
    title: 'Wash the dishes',
  },
  {
    id: '22',
    title: 'Clean the table ',
  },
  {
    id: '23',
    title: 'Clean the kitchen',
  },
  {
    id: '24',
    title: 'Clean the body',
  },
  {
   id: '25',
    title: 'Ready to Sleep',
  },
];
type ItemProps = { title: string, index: number };

const colors = ['#E1A7B0', '#4EC8CD', '#6ECD48', '#4A7EBF', '#D37676','#BD78D0','#ECD061','#8869D2'];

const Item = ({ title, index }: ItemProps) => {
const [isHovered, setIsHovered] = useState(false);

return (
<View style={styles.itemContainer}>
<TouchableOpacity
onPressIn={() => setIsHovered(true)} // Hover effect on press
onPressOut={() => setIsHovered(false)} // Revert back when touch ends
style={[
styles.item,
{
backgroundColor: isHovered ? '#2196f3' : colors[index % colors.length], // Change color on hover
},
]}
>
<Text
style={[
styles.title,
{ color: isHovered ? 'white' : 'black' }, // Change text color on hover
]}
>
{title}
</Text>
</TouchableOpacity>
</View>
);
};

const App = () => (
<SafeAreaProvider>
<SafeAreaView style={styles.container}>
<Text>Morning</Text>
<FlatList
data={DATA1}
renderItem={({ item, index }) => <Item title={item.title} index={index} />}
keyExtractor={(item) => item.id}
/>
<Text>Afternoon</Text>
<FlatList
data={DATA2}
renderItem={({ item, index }) => <Item title={item.title} index={index} />}
keyExtractor={(item) => item.id}
/>
<Text>Evening</Text>
<FlatList
data={DATA3}
renderItem={({ item, index }) => <Item title={item.title} index={index} />}
keyExtractor={(item) => item.id}
/>
</SafeAreaView>
</SafeAreaProvider>
);

const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: StatusBar.currentHeight || 0,
},
itemContainer: {
marginVertical: 8,
marginHorizontal: 16,
},
item: {
padding: 20,
borderRadius: 10,
},
title: {
fontSize: 16,
fontWeight: 'bold',
},
});

export default App;