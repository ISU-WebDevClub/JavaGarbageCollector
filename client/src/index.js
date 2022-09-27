import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <p>
                JSX from Layout()
            </p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Link To Home</Link>
                    </li>
                    <li>
                        <Link to="/page1">Link To Page1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Link To Page2</Link>
                    </li>
                    <li>
                        <Link to="/ono">Broken Link</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

function Home(props) {
    return (
        <p>
            JSX from Home()
            <br/>
            {props.value}
        </p>
    );
}

function Page1() {
    return (
        <p>
            JSX from Page1()
        </p>
    );
}

function Page2() {
    return (
        <p>
            JSX from Page2()
        </p>
    );
}

function Ono() {
    return <h1>404</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home value={"Prop"} />}/>
                    <Route path="page1" element={<Page1 />}/>
                    <Route path="page2" element={<Page2 />}/>
                    <Route path="*" element={<Ono />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h1>
            Hello, World!
        </h1>
        <App />
    </React.StrictMode>
);
