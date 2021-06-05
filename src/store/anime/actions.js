import React from 'react';
import {API_URL_C} from './../../utils/constlist';


export const ANIME_REQUEST = 'ANIME::REQUEST';
export const ANIME_SUCCESS = 'ANIME::SUCCESS';
export const ANIME_FAILURE = 'ANIME::FAILURE';

export const animeRequest = ()=>({
    type: ANIME_REQUEST,
});

export const animeSuccess = (animenews)=>({
    type: ANIME_SUCCESS,
    animenews
});
export const animeFailure = (error)=>({
    type: ANIME_FAILURE,
    error
});

export  const getAnimeNews =() =>(dispatch)=>{
    dispatch(animeRequest());
    fetch(API_URL_C)
        .then((response)=>{
        if(!response.ok){
        throw new Error("request failed with status!" + response.status);
    }
    return   response.json();
})
.then((data)=>{
        dispatch(animeSuccess(data));
})
.catch((error)=> {
        dispatch(animeFailure(error.message))
})

};

