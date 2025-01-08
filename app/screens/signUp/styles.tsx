import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#f9f9f9',
    },
    title: {
      fontSize: 32,
      textAlign: 'center',
      marginBottom: 24,
      color: '#333',
      fontWeight: 'bold',
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 10,
      borderRadius: 8,
      backgroundColor: '#fff',
    },
    linkText: {
      marginTop: 16,
      textAlign: 'center',
      color: '#007BFF',
      fontSize: 16,
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 16,
    },
    image: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
      marginVertical: 16,
      alignSelf: 'center',
      borderRadius: 50,
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    buttonIcon: {
      marginRight: 8,
    },
  });

  export default styles;