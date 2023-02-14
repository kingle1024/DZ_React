import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import MyPageItem from './MyPageItem';

const MyPage = () => {
    return (
        <div>
            <h1>내정보</h1>
            <br/>
            <Table bordered hover>
                <MyPageItem />            
            </Table>
        </div>
    );
};

export default MyPage;