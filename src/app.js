import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<Routes>
				<Route user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} element={<SignIn />} />
				<Route user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} element={<SignUp />} />
				<Route user={user} path={ROUTES.BROWSE} element={<Browse />} />
				<Route user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} element={<Home />} />
				{/* <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
					<SignIn />
				</IsUserRedirect> */}
				{/* <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
					<SignUp />
				</IsUserRedirect>
				<ProtectedRoute user={user} path={ROUTES.BROWSE}>
					<Browse />
				</ProtectedRoute>
				<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
					<Home />
				</IsUserRedirect> */}
			</Routes>
		</Router>
	);
}

export default App;
