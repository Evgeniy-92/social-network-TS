import React from "react";
import {AppStateType} from "./redux-store";
import { createSelector } from 'reselect'

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
}) //для примера делаем фильтрацию. Просто, что бы применить библиотеку Reselect



export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppStateType) => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getButtonActivity = (state: AppStateType) => {
    return state.usersPage.buttonActivity
}