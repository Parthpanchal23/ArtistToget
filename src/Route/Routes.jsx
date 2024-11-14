import Home1 from "../Pages/home/home1";
import Home2 from "../Pages/home/home2";
import Home3 from "../Pages/home/home3";

export const routes =[

    {
        path:import.meta.env.VITE_PUBLIC_URL,
        auth:[''],
        Components:<Home1/>
    },
    {
        path:"/home2",
        auth:['ARTIST'],
        Components:<Home2/>
    },
    {
        path:"/home3",
        auth:['HIRER'],
        Components:<Home3/>
    }
]