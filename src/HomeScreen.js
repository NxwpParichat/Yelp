
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import yelp from './api/yelp';
import { Ionicons } from '@expo/vector-icons';
import ResultList from './component/ResultList';

const HomeScreen = () => {
    const [term,setTerm]=useState('')
    const [result,setResult]=useState([])
    const searchApi = async ()=>{
        try {
            const response = await yelp.get('/search',{
            params:{
                limit:50,
                term,
                location:'NYC'
            }      
        }) 
        setResult(response.data.businesses)
        console.log(response)
        } catch (error) {
            console.log("Something went wrong!!")
        }
    };
const filterResultByPrice =(price)=>{
    return result.filter((result)=>{
        return result.price===price
    });
};

useEffect(()=>{
    searchApi("Steak");
},[]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} 
                
                 placeholder='Search by name i.e. Pizza or Ramen'
                 onChangeText={(newterm)=>{
                    setTerm(newterm);
                 }}
                 value={term}
                 onEndEditing={searchApi}
                 />
            <Ionicons name="ios-search-outline" size={24} color="black" />
            </View>   
            <Text style={styles.searchText}>
                SearchTerm:{term}. Found{result.length} result </Text>
            <ResultList 
                title='Cheap' 
                result={filterResultByPrice('$')} 
                />
            <ResultList 
                title='Moderate' 
                result={filterResultByPrice('$$')}
                />
            <ResultList 
                title='Expensive' 
                result={filterResultByPrice('$$$')}
                />
        <FlatList>
            data={result}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <Text>{item.name}</Text>
            )}
        </FlatList>
        </ScrollView>
    )}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9b4be',
        padding: 10,
        paddingHorizontal: 15,
    },
    input: {
        flex:1,
        fontSize:18,
        paddingLeft:20,
    },
    icon: {
        fontSize: 50,
        marginRight: 20,
        alignSelf: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#f8eeee',
        height: 50,
        marginTop: 10,
        borderRadius:30,
        
    },
    


});

export default HomeScreen;