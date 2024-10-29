//axios gerenciamento de requisições
import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, View} from "react-native";
import { req } from "../libs/axios";

export default function Screen() {
    const [movieCount, setMovieCount] = useState(0);

    const handleClick = async () => {

        const response = await req.post('/posts', {
            title: 'Novo post',
            body: 'Corpo do novo post',
            userId: 99
        });
        
        if(response.status === 201) {
            console.log(response.data);
        }
    }

    return (
        <View style={styles.container}>
            
            <Button title="Inserir post novo" onPress={handleClick}/>
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