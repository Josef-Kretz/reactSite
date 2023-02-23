import { createBrowserRouter } from "react-router-dom";

import Root from './root'
import ErrorPage from '../error-page'
import Home from '../Home'
import Contact, {action as contactAction} from '../Contact'


const router = createBrowserRouter([
    {
        path:'/',
        element: <Root />,
        children:[
            {
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    },
                    {
                        path: 'contact',
                        element: <Contact />,
                        action: contactAction
                    },
                    {
                        path:'*',
                        element: <ErrorPage />
                    }
                ]
            }
        ]
    }
])

export default router