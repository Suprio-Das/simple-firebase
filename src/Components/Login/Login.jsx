import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider;

    // Handle Google Login
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
                console.table("Error: ", error.message)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google</button>
            {user &&
                <div>
                    <h3>User Name: {user.displayName}</h3>
                    <h3>Email: {user.email}</h3>
                </div>
            }
        </div>
    );
};

export default Login;