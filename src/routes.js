import Users from "@/components/users/Users"
import Users1 from "@/components/users/Users1"

import Card from "@/components/card/Card";
import Maddie from "@/components/Maddie/Maddie";
import JavaScript from "@/components/JavaScript/JS"
import Test from "@/components/Test";
import debounce from "@/components/test2";



export const routes = [
    {
        path: '/users',
        name: 'users',
        component: Users
    },
    {
        path: '/users1',
        name: 'users',
        component: Users1
    },
    {
        path: '/card',
        name: 'card',
        component: Card
    },
    {
        path: '/maddie',
        name: 'maddie',
        component: Maddie
    },
    {
        path: '/javascript',
        name: 'javascript',
        component: JavaScript
    },
    {
        path: '/test',
        name: 'test',
        component: Test
    },
    {
        path: '/debounce',
        name: 'debounce',
        component: debounce
    },

]