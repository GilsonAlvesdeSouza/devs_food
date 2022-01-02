import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from "./AppStyled";
import { Cart, MenuItem, PrivateRouter } from "./components";
import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";


const App = () => {
  const name = useSelector((state) => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem icon="/assets/store.png" link="/" />
          <MenuItem icon="/assets/order.png" link="/orders" />
          <MenuItem icon="/assets/profile.png" link="/profile" />
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/login">
              <div>Pagina de Login</div>
            </Route>
            <PrivateRouter path="/orders">
              <div>Tela de pedidos</div>
            </PrivateRouter>
            <PrivateRouter path="/profile">
              <div>Profiles</div>
            </PrivateRouter>
            <Route path="/tela2/:nome">
              <Tela2Screen />
            </Route>
          </Switch>
        </PageBody>
        <Cart />
      </Container>

      <h1>Oi, {name}</h1>
    </BrowserRouter>
  );
};

export default App;
