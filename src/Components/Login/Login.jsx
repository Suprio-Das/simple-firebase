import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider;
    const gitProvider = new GithubAuthProvider;
    // Handle Google Login
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
                console.table("Error: ", error.message)
            })
    }

    // Handle Github Signin
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const loggedInUser = result.user
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // Hanlde Google Logout
    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                alert("User Logout successfully", result)
                setUser(null)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            {
                user ? <button onClick={handleLogOut}>Logout</button> : <div>
                    <button onClick={handleGoogleSignIn}>Google</button>
                    <button onClick={handleGithubSignIn}>GitHub</button>
                </div>
            }

            {user &&
                <div>
                    <h3>User Name: {user.displayName}</h3>
                    <h3>Email: {user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;