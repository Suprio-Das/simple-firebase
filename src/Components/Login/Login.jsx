import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider;

    // Handle Google Login
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.table("Error: ", error.message)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google</button>
        </div>
    );
};

export default Login;