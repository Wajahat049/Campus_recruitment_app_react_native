import * as React from 'react';
import { BottomNavigation,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text,TextInput,Alert,useWindowDimensions } from 'react-native';
import CompanySignUp from './CompaniesSignup';
import CompanyLogin from './CompaniesLogin';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';


const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case 'login':
      return <CompanyLogin navigation={route.props.navigation}  jumpTo={jumpTo} />;
    case 'signup':
      return <CompanySignUp navigation={route.props.navigation} jumpTo={jumpTo} />;
  }
};

const CompanyToggle = (props) => {
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

export default CompanyToggle;