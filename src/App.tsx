import NowWeather from "./components/NowWeather";
import { Box } from "./components/ui/styled";

const App = () => {
  return (
    <Box
      minHeight={"100vh"}
      justifyContent="center"
      alignItems="center"
      padding={"0 1rem"}
    >
      <NowWeather />
    </Box>
  );
};

export default App;
