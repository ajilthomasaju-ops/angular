import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Contact } from './contact/contact';
import { Users } from './users/users';

export const routes: Routes = [
    //http://localhost:4200/
    {
        path:"",component:Home,title:"Home"
    },
     //http://localhost:4200/login
    {
        path:"login",component:Login,title:"Login"
    },
    //http://localhost:4200/register
    {
        path:"register",component:Register,title:"Register"
    },
    //http://localhost:4200/register
    {
        path:"contact",component:Contact,title:"Contact"
    },
    {
        path:"users",component:Users,title:"Users"
    }
];
