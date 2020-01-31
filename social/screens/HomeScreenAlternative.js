import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
    StreamApp,
    FlatFeed,
    Activity,
    LikeButton,
    

} from 'expo-activity-feed';

const CustomActivity = (props) => {
  return (
    <Activity
      {...props}
      Footer={
        <LikeButton {...props} />
      }
    />
  );
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
      <StreamApp
          apiKey="5xerpqmas6vw"
          appId="68933"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.L4HTbs7K18mQjyqwsTed5MMuJZZCQ1TmNlry496LiBg"
      >
        <FlatFeed Activity={CustomActivity} />
      </StreamApp>
    </SafeAreaView>
  );
};

export default App;