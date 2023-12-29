import {FlatList, StyleSheet} from 'react-native';
import { Button } from 'react-native';
import GridView from '../Components/GridView';

const FUNCTIONS = [
    {
        id: '1',
        title: 'Election',
        component: 'Election'
    },
    {
        id: '2',
        title: 'General Data',
        component: 'SOmething'
    },
    {
        id: '3',
        title: 'Help',
        component: 'asd',
    },
];


function Dashboard({navigation}){
    return(
        <>
        <FlatList 
        key={FUNCTIONS.id} 
        data={FUNCTIONS} 
        keyExtractor={item => item.id} 
        renderItem={(itemData) => <GridView text={itemData.item.title} id={itemData.item.id} comp={itemData.item.component}/>}/>
        <Button title='Admin' onPress={() => navigation.navigate('AdminPanel')}/> 
        </>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})