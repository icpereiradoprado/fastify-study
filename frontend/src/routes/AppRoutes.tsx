import { createBrowserRouter, redirect } from 'react-router-dom'
import Login from '../pages/login/Login';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        action: async () => {
            return redirect('/home');
        }
    },
    {
        path: "home",
        element: <div>Home</div>,
    },
]);

  export { router };