import {View, FlatList, Text} from 'react-native';
import GridviewElection from '../Components/GridviewElection';

const ParticipantInfo = [
    {
        id: 1,
        name: 'Rahul',
        photo: 'Image',
    },
    {
        id: 2,
        name: 'Modi',
        photo: 'Image',
    },
    {
        id: 3,
        name: 'Sonia',
        photo: 'Image',
    },
    {
        id: 4,
        name: 'Agarwal',
        photo: 'Image',
    },
]

function ParticipateSection(){
    return (
        <View>
            <FlatList 
            data={ParticipantInfo} 
            renderItem={(itemData) => 
            <GridviewElection text={itemData.item.name} 
            id={itemData.item.id}
            img={itemData.item.img}
            />}></FlatList>
        </View>

    );
}

export default ParticipateSection;