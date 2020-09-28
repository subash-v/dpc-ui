import React from "react";
import logo from "./logo.svg";
import styles from "./App.css";
import { withRouter } from "react-router-dom";
import { Provider } from "./containers/Provider";
class App extends React.Component {
  // componentDidMount() {
  //   if (window.AndroidApp) {
  //     window.AndroidApp.getToken();
  //     document.addEventListener("_mobileEvent", (event) => {
  //       if (event.detail.id === "token")
  //         localStorage.setItem("accessToken", event.detail.data.token);
  //     });
  //   }
  // }
  render() {
    // const loggedIn = localStorage.getItem("accessToken") ? true : false;
    return (
      <Provider>
        <div className={styles.base}>dcp-ui</div>
        {/* {loggedIn ? (
          <PrivateRoutes {...this.props} />
        ) : (
          <PublicRoutes {...this.props} />
        )}{" "} */}
      </Provider>
    );
  }
}
export default withRouter(App);
