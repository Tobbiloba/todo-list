import HomePage from "./screen/HomePage";
import WriteNote from "./screen/WriteNote";
import UpdateNote from "./screen/UpdateNote";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'


const routes = [
  <Route path="/" element={<HomePage />} />,
  <Route path="/write-note" element={<WriteNote />} />,
  <Route path="/edit/:_id" element={<UpdateNote />} />,
]

const router = createBrowserRouter(createRoutesFromElements(routes))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
