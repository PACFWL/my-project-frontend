import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 16,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    linkText: {
      marginTop: 12,
      textAlign: 'center',
      color: '#007BFF',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 16,
    },
  });

  export default styles;