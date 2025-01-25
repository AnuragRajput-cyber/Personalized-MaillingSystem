import { Suspense } from 'react';
import './App.css';
import {Navigate, Route,RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import  {routes} from './routes/routes.js'
//broswerRouter -> xml file and createBroswerRouter is replaceMent of this function
import ErrorComponents from './components/common/ErrorComponents';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to = {`${routes.emails.path}/inbox`}/>}/>
      <Route path={routes.main.path} element={<routes.main.element/>}>
        <Route path ={`${routes.emails.path}/:type`} element={<routes.emails.element/>} errorElement={<ErrorComponents/>}/>
        <Route path= { routes.view.path} element= {<routes.view.element/>} errorElement={<ErrorComponents/>}/>
      </Route>
        <Route path={routes.invalid.path} element={<Navigate to ={`${routes.emails.path}/inbox`}/>}/>
    </Route>
  )
)
function App() {
  return (
    <Suspense fallback>
    <RouterProvider router={router}/>
    </Suspense>
  );
}

export default App;
