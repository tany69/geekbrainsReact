import React from 'react';
 import {API_URL} from './../../utils/constlist';


export const ARTICLE_REQUEST = 'ARTICLES::REQUEST';
export const ARTICLE_SUCCESS = 'ARTICLES::SUCCESS';
export const ARTICLE_FAILURE = 'ARTICLES::FAILURE';

export const articlesRequest = ()=>({
    type: ARTICLE_REQUEST
});

export const articlesSuccess = (articles)=>({
    type: ARTICLE_SUCCESS,
    articles
});
export const articlesFailure = (error)=>({
    type: ARTICLE_FAILURE,
    error
});

export  const getArticles =() =>(dispatch)=>{
   dispatch(articlesRequest());
    fetch(API_URL)
    .then((response)=>{
        if(!response.ok){
         throw new Error("request failed with status!" + response.status);
        }
        return   response.json();
    })
    .then((data)=>{
        dispatch(articlesSuccess(data));
        })
    .catch((error)=> {
         dispatch(articlesFailure(error.message))
     })

};

 export const getArticles2 = () => async (dispatch) => {
     dispatch(articlesRequest());

     try {
         const response = await fetch(API_URL);

         if (!response.ok) {
             throw new Error("request failed with status " + response.status);
         }

         const data = await response.json();

         dispatch(articlesSuccess(data));
     } catch (err) {
         dispatch(articlesFailure(err.message));
     }
 };

