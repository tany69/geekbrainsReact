import React,{useEffect,useState} from 'react';
export const API_URL = "https://spaceflightnewsapi.net/api/v2/articles/";
export const API_URL_C = "https://api.jikan.moe/v3/anime/1/news";
//https://favqs.com/api/quotes
export const REQUEST_STATUS= {
    IDLE:0,
    PENDING:1,
    SUCCESS:2,
    FAILURE:4
}