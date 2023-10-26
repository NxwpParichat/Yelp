import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ResultList = ({title,result})=>{
    const navigation = useNavigation();
    if(!result.length){
        return null;
    }
    return(
        <View>
                <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal //หากเป็น true แสดงรายการที่อยู่ติดกันเป็นแนวนอน
            showsHorizontalScrollIndicator={false} //ทำให้รายการที่อยู่ติดกันเลื่อนได้
            data={result}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <View>
                            <Image style={styles.img} source={{uri:item.image_url}}/>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text><Ionicons name="star-half-sharp" size={24} color="black" />
                            {item.rating} ({item.review_count} reviews)</Text>
                        </View> 
                    </TouchableOpacity>
                    
                )
                
            }}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
    },
    img:{
        width:300,
        height:200,
        borderRadius:10,
        margin:5,
    }
});

export default ResultList;