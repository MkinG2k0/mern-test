import React from "react";
import {Route, Navigate, Routes} from 'react-router-dom'
import {Links} from '../pages/Links/Links'
import {Auth} from "../pages/Auth/Auth";
import Detail from "../pages/Detail/Detail";
import {Create} from "../pages/Create/Create";

export const useRoutes = (isAuth) => {

	if (isAuth) return (
		<Routes>
			<Route path={'links'} element={<Links/>}/>
			<Route path={'create'} element={<Create/>}/>
			<Route path={'detail/:id'} element={<Detail/>}/>
			<Route path={'/*'} element={<Navigate to="/links"/>}/>
		</Routes>)

	return (
		<Routes>
			<Route path={'/'} element={<Auth/>}/>
			<Route path={'*'} element={<Navigate to="/" replace/>}/>
		</Routes>)
}