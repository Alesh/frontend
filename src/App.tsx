import { observer } from "mobx-react-lite";
import { Link, Navigate, Route } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { routerStore } from "@/stores";
import Routes from "@/components/Routes";
import View from "@/views/Dashboard";
import SignIn from "@/views/SignIn";
import Chat from "@/views/Chat";
import Logo from "@/assets/react.svg";

const App = observer(() => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <Logo className="w-10" />
          <p className="font-bold text-inherit">A2 terminal</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          {[
            { pathname: "/", title: "Дашборд" },
            { pathname: "/chat", title: "Chat" },
          ].map(({ pathname, title }, index) => (
            <NavbarItem key={index} isActive={location.pathname == pathname}>
              <Link to={pathname}>{title}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} to="/sign-in" color="primary" variant="flat">
              Вход
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="max-w-screen-lg mx-auto px-6 py-2">
        <Routes routerStore={routerStore}>
          <Route path="/" element={View()} />
          <Route path="/chat" element={Chat()} />
          <Route path="/sign-in" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </main>
      <Routes modal routerStore={routerStore}>
        <Route path="/sign-in" element={SignIn()} />
      </Routes>
    </>
  );
});

export default App;
