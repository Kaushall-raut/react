import { DataWrapper } from "./context/ContextApi";
import { MainComponent } from "./components/MainComponent";

export const App = () => {
  return (
    <DataWrapper>
      <MainComponent />
    </DataWrapper>
  );
};
