import { AuthProvider } from "./Context/AuthContext";
import { RouterCom } from "./RouterCom";
import "./App.css";

function App() {

  return (
    <AuthProvider>
      <RouterCom /> 
    </AuthProvider>
  );
}

export default App;
