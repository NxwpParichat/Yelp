import React,{useEffect, useState} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import yelp from "./api/yelp";

const ShowScreen = ({route}) => {
    const [result,setResult] = useState(null);

    const {id} = route.params;

    const getDetails = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(()=>{
        getDetails(id);
    }, []);

    if (!result) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text>{result.name}</Text>
            <FlatList
                data = {result.photos}
                keyExtractor={(photo)=> photo}
                renderItem={({item}) => {
                    return <Image style={styles.img} source={{uri : item}}/>
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000',
    },
    title:{

    },
    img:{
        width : 300,
        height : 200,
        margin:5,
        borderRadius:30,
    }
})

export default ShowScreen;