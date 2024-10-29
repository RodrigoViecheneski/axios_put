//axios gerenciamento de requisições
import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, View} from "react-native";

export default function Screen() {
    const [movieCount, setMovieCount] = useState(0);

    const handleClick = async () => {
        const response = await axios.get(
            'https://reactnative.dev/movies.json',
           // {
         //       params:{
         //           genre: 'action'
          //      }
          //  }
        );
        //console.log(response.status);
        if(response.status === 200){
            setMovieCount(response.data.movies.length);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.movieCount}>Filmes: {movieCount}</Text>
            <Button title="Carregar" onPress={handleClick}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    movieCount: {
        fontSize: 24,
        textAlign: 'center',
        margin: 20
    }
});