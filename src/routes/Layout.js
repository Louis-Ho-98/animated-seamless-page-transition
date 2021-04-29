import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Detail from "../pages/Detail";
import Payment from "../pages/Payment";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div style={{ position: "relative", scrollbarWidth: 0 }}>
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/home">
            <Home pathname={location.pathname} />
          </Route>

          <Route path="/menu">
            <Menu pathname={location.pathname} />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
