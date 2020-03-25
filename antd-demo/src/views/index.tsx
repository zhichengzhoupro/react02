//import Loadable from'react-loadable'
import { Loading } from '../components/index'
import Loadable from "./Loadable"


const DashBoard = Loadable({
    Loader: () => import('./dashboard/DashBoard'),
    Loading: Loading
})

const ArticleEdit = Loadable({
    Loader: () => import('./Article/ArticleEdit'),
    Loading: Loading
})

const Article = Loadable({
    Loader: () => import('./Article/ArticleList'),
    Loading: Loading
})

const NotFound = Loadable({
    Loader: () => import('./not-found/NotFound'),
    Loading: Loading
})

const Login = Loadable({
    Loader: () => import('./login/Login'),
    Loading: Loading
})

const Settings = Loadable({
    Loader: () => import('./settings/Settings'),
    Loading: Loading
})

export {
    DashBoard,
    Article,
    ArticleEdit,
    NotFound,
    Login,
    Settings
}