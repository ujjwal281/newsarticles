import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import './App.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <ArticleList/>,
    },
    {
      path: "/article/:title",
      element: <ArticleDetail/>,
    },
  ]);


const App = () => {
    return (
            <div className=" p-20">
                <RouterProvider router = {router} />
            </div>
    );
};

export default App;
