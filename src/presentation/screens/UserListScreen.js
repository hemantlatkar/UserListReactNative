// Example for UserListScreen.js
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import { GetUsersUseCase } from '../../domain/usecases/GetUsersUseCase';
 
const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = new GetUsersUseCase();
    getUsers.execute().then(fetchedUsers => {
      setUsers(fetchedUsers);
    }).catch((error) => {
      console.error("Error fetching users:", error);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('UserDetails', { user: item })}>
            <View style={styles.card}>
            <Text style={styles.cardContent}><Text style={styles.label}>{item.name}</Text></Text>
          <Text style={styles.cardContent}><Text>ID: </Text>{item.id}</Text>
          <Text style={styles.cardContent}><Text>User Email: </Text>{item.email}</Text>
         </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

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
    fontSize: 20,
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

export default UserListScreen;
