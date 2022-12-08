import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { rootReducer } from "app/store";
import AppContainer from "app/AppContainer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </SafeAreaView>
  );
};

export const API_URL = "";

export default App;
