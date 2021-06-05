import React,{useEffect, useState} from 'react';
import {getAnimeNews} from './../../store/anime/actions';
import {useDispatch, useSelector} from 'react-redux';
import {REQUEST_STATUS} from './../../utils/constlist';

export const AnimeNews= ()=>{

    const news = useSelector((state) => state.anime.newsList);
    const animeStatus = useSelector((state) => state.anime.request.status);
    const animeError= useSelector((state) => state.anime.request.error);
    const dispatch= useDispatch();

    console.log(animeStatus);
    useEffect(()=>{
        dispatch(getAnimeNews());
    },[]);


    if (animeStatus === REQUEST_STATUS.PENDING){
        return <h3>LOADING.....</h3>
    }
    if(animeError){
        return <h3>Error:{error}</h3>
    }
    console.log(news);
    return(
        <>
        <div><h3>Anime news....</h3></div>
        {news.articles.map((news,key)=>(
            <div key={key}>
                <span>{news.title}</span>
                <img src={news.image_url} />
                <a href={news.url} title="перейти">читать...</a>
            </div>
            ))}
        <br/>
    </>
    )
}