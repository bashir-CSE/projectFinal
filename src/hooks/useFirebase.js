import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../firebase/firebase.init";
// email password
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	onAuthStateChanged,
	GoogleAuthProvider,
	updateProfile,
	signOut,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
	const auth = getAuth();
	const [user, setUser] = useState({});
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(true);

	// create user with email password
	const registerUser = (email, password, userName, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setError("");
				const newUser = { email, displayName: userName };
				setUser(newUser);

				// .send name to firebase after creation
				updateProfile(auth.currentUser, {
					displayName: userName,
				})
					.then(() => {})
					.catch((error) => {});
				history.replace(`/`);
			})
			.catch((error) => {
				setError(error.message);
				// ..
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// login user with email password
	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const destination = location?.state?.from || "/";
				history.replace(destination);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// google sign in
	const googleProvider = new GoogleAuthProvider();
	const signInUsingGoogle = (location, history) => {
		setIsLoading(true);
		return signInWithPopup(auth, googleProvider)
			.then((result) => {
				const destination = location?.state?.from || "/";
				history.replace(destination);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const logout = () => {
		setIsLoading(true);
		signOut(auth)
			.then((user) => {
				setUser({});
			})
			.catch((error) => {
				//an errore happend
				setError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// observe user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, []);

	return {
		isLoading,
		user,
		// email password changed
		registerUser,
		loginUser,
		error,
		signInUsingGoogle,
		logout,
	};
};

export default useFirebase;
