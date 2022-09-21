import * as React from 'react';
import { BottomNavigation,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text,TextInput,Alert,useWindowDimensions } from 'react-native';
import StudentSignUp from './StudentsSignup';
import StudentLogin from './StudentsLogin';
import { TabView, SceneMap } from 'react-native-tab-view';


const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case 'login':
      return <StudentLogin navigation={route.props.navigation}  jumpTo={jumpTo} />;
    case 'signup':
      return <StudentSignUp navigation={route.props.navigation} jumpTo={jumpTo} />;
  }
};

const StudentToggle = (props) => {
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
     />
    );
};

export default StudentToggle;