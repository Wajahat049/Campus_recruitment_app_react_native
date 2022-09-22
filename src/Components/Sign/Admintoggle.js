import * as React from 'react';
import { Button } from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import { View, Text,TextInput,Alert,useWindowDimensions } from 'react-native';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';


const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case 'login':
      return <AdminLogin navigation={route.props.navigation}  jumpTo={jumpTo} />;
    case 'signup':
      return <AdminSignup navigation={route.props.navigation} jumpTo={jumpTo} />;
  }
};

const AdminToggle = (props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'login', title: 'Login',props:props },
    { key: 'signup', title: 'Signup',props:props },
  ]);

   
    return (
       <TabView
       navigationState={{ index, routes }}
       renderScene={renderScene}
       onIndexChange={setIndex}
       initialLayout={{ width: layout.width }}
       renderTabBar={props => <TabBar {...props} tabStyle={{backgroundColor:"#00b8e6"}} labelStyle={{color:"white",fontSize:18}} indicatorStyle={{backgroundColor: "white",padding: 2,marginBottom: -2}} />}
     />
    );
};

export default AdminToggle;