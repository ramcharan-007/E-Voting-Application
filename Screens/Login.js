import { Button, StyleSheet, TextInput, View, Text } from 'react-native';


export default function LoginPage({navigation}){
    function ontextchange(value) {
        console.log(value);
      }
      
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>
              Voting Application
            </Text>
          </View>
        <TextInput style={styles.textInput} placeholder='Username' onChangeText={ontextchange} />
        <TextInput style={styles.textInput} placeholder='Password' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Login' onPress={() => navigation.navigate('Dashboard')} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={() => console.log("I got clicked again")} />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin:16,
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 16,
    },
    button: {
      width: 100,
      marginHorizontal: 16,
    },
    textInput: {
      borderWidth: 2,
      borderColor: '#e4d0ff',
      backgroundColor:'#e4d0ff',
      color: 'black',
      width: '100%',
      padding: 8,
      borderRadius:6,
      marginTop:8,
  },
  heading: {
    fontSize: 30,
    paddingBottom: 34,
    color: 'red',
  }
  });