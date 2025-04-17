import { ContextApi } from "./context/ContextApi";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <ContextApi>
      <Home />
      <Contact/>
    </ContextApi>
  );
};
