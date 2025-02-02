import React, { useEffect, useState } from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// First Screen Component
function FirstScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>First Screen</Text>
      <Button 
        title="Go to Second Screen" 
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </View>
  );
}

// Second Screen Component
function SecondScreen({ navigation }) {
    const [data, setData] = useState([]); // Default to null instead of undefined

    const getAPIData = async ()=>{
        //Api call to gte respone
        const url = "https://jsonplaceholder.typicode.com/posts"
        let result = await fetch(url);
      result = await result.json();
      setData(result)
    }
    useEffect(()=> {
        getAPIData();
    },[])

     // Render each item in the list
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Post ID: {item.id}</Text>
      <Text style={styles.cardContent}><Text style={styles.label}>User ID: </Text>{item.userId}</Text>
      <Text style={styles.cardContent}><Text style={styles.label}>Title: </Text>{item.title}</Text>
      <Text style={styles.cardContent}><Text style={styles.label}>Body: </Text>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>You have entered the second screen</Text>
      <Text style={styles.subHeading}>API Call:</Text>
      {data.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.loading}>Loading...</Text> // You can show loading until data is fetched
      )}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#f4f4f4', // Light background color
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    subHeading: {
      fontSize: 22,
      fontWeight: '600',
      color: '#555',
      marginBottom: 10,
    },
    card: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      marginBottom: 20,
      width: '100%',
      maxWidth: 400,
      alignSelf: 'center',
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 15,
    },
    cardContent: {
      fontSize: 18,
      color: '#666',
      marginBottom: 10,
    },
    label: {
      fontWeight: 'bold',
      color: '#007BFF', // Blue color for labels
    },
    loading: {
      fontSize: 18,
      color: '#888',
      marginTop: 20,
    }
  });
  

// Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen 
          name="FirstScreen" 
          component={FirstScreen} 
          options={{ title: 'First Screen' }} 
        />
        <Stack.Screen 
          name="SecondScreen" 
          component={SecondScreen} 
          options={{ 
            title: 'Second Screen', 
            headerBackTitle: 'Back', 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
