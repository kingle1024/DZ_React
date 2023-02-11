import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            레이아웃
            <header>
                <button>로그인</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;