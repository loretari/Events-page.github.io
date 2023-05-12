
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader} from "./pages/Events";
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import { action as manipulateEventAction} from './components/EventForm';
import NewsletterPage, { action as newsLetterAction} from "./pages/Newsletter";
import AuthenticationPage, {action as authAction} from "./pages/Authentication";
import { action as logoutAction} from './pages/Logout';


const router = createBrowserRouter([
    {path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'events', element: <EventsRootLayout/>, children: [
                    {index: true, element: <EventsPage/>,
                        loader: eventsLoader},

                    {
                      path: ':eventId',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                      children: [
                          {index: true,
                              element: <EventDetailPage/>,
                              action: deleteEventAction,

                          },
                          {path: 'edit', element: <EditEventPage/>, action: manipulateEventAction},
                      ]
                    },


                    {path: 'new', element: <NewEventPage/>, action: manipulateEventAction },

                ]},
            {
                path: 'auth',
                element: <AuthenticationPage/>,
                action: authAction,
            },

            {
                path: 'newsletter',
                element: <NewsletterPage/>,
                action: newsLetterAction,
            },
            {
                path: 'logout',
                action : logoutAction,
            },

        ]},

])

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
