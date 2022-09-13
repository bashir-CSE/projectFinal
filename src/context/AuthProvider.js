import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {

  const AllContexts = useFirebase();

	return (
		<div>
			<AuthContext.Provider value={AllContexts}>{children}</AuthContext.Provider>
		</div>
	);
}

export default AuthProvider;
