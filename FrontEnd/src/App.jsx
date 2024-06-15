import { AllRoutes } from './pages/AllRoutes';
import { BrowserRouter} from "react-router-dom";
import { ChakraProvider} from '@chakra-ui/react'
import { CoursePage } from './pages/CoursePage';

const App = () => {
  return (
    <div>
      <ChakraProvider>
      <BrowserRouter>
        <AllRoutes/>
        </BrowserRouter>
        </ChakraProvider>
        
    </div>
  );
};


export default App;
