import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            레이아웃
            <header>
                <button>로그인</button>
                <Link to="/" >홈</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;