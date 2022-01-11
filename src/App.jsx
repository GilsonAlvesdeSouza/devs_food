import React from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from "./AppStyled";
import { Cart, MenuItem, PrivateRouter } from "./components";
import { HomeScreen, Tela2Screen } from "./pages";

const App = () => {
  const name = useSelector((state) => state.user.name);

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Loja" icon="/assets/store.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" />
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
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};

export default App;
