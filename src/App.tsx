import { NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import TopBar from "@/components/TopBar";
import Dashboard from "@/views/Dashboard";

const App = () => {
  return (
    <>
      <TopBar
        actions={[
          { action: "#dashboard", title: "Dashboard" },
          { action: "#chat", title: "Chat" },
        ]}
      >
        <NavbarItem>
          <Button as={Link} href="#signIn" color="primary" variant="flat">
            Sign in
          </Button>
        </NavbarItem>
      </TopBar>
      <main className="max-w-screen-lg mx-auto px-6 py-2">
        <Dashboard />
      </main>
    </>
  );
};

export default App;
