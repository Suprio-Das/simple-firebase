import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider;

    // Handle Google Login
    const handleGoogleSignIn = () => {
        console.log("Google Sign In")
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google</button>
        </div>
    );
};

export default Login;