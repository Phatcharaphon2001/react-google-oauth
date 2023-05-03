import "./App.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useStore } from "./hooks/useStore";
import Profile from "./components/Profile";
function App() {
  const setAuthData = useStore((state: any) => state.setAuthData);
  return (
    <>
      <GoogleOAuthProvider clientId="80193652031-d6ri80kmd3qfu728tqek3s22np8tpa6t.apps.googleusercontent.com">
        <div>
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
             
            
              const response = await axios.post("http://localhost:4000/user/login",
              {token: credentialResponse.credential});
              const data = response.data;
              localStorage.setItem("authData", data);
              setAuthData(data);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <Profile/>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
