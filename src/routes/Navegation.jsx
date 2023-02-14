import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Layout } from '../components/layout/Layout';
import { Home } from '../pages/Home';
import { Account } from '../pages/Account';
import { Groups } from '../pages/groups/Groups';
import { Group } from '../pages/groups/Group';


export const Navegation = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/my-account" element={ <Account /> } />
                    <Route path="/groups" element={ <Groups /> } />
                    <Route path="/groups/:id" element={ <Group /> } />
                    <Route path="*" element={ <Navigate to="/" replace /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
