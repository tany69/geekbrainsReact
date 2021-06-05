import React,{useEffect,useState} from 'react';
import {REQUEST_STATUS} from './../utils/constlist'
import {useDispatch, useSelector} from 'react-redux';
import {getArticles,getArticles2} from './../store/articles/actions';

export const Articles =()=>{
    // const [arcticles, setArticles]  = useState([]);
    // const [loading, setLoading]     = useState(false);
    // const [error, setError]         = useState('false');
    // const getArticles= async()=>{
    // try {
    //
    //
    //      const response = await fetch(API_URL);
    //      const data = await response.json();
    // }catch(error){
    //
    // }
    // finally {
    //
    // }
    // }
    //
    // useEffect(()=>{
    //     setLoading(true);
    //     fetch(API_URL)
    //         .then((response)=>{
    //             if(!response.ok){
    //                throw new Error("request failed with status!" + response.status);
    //             }
    //             console.log("response----",response);
    //             return response.json();
    //         })
    //         .then((data)=>{
    //             setArticles(data);
    //             setLoading(false);
    //         })
    //         .catch(error=>setError(error.message))
    //         //.finally(()=> setLoading(false))
    //     //getArticles();
    //     },[]);
    const articles = useSelector((state) => state.article.articlesList);
    const articlesStatus = useSelector((state) => state.article.request.status);
    const articlesError= useSelector((state) => state.article.request.error);
    const dispatch= useDispatch();

    console.log(articlesStatus);
    useEffect(()=>{
        dispatch(getArticles());
    },[]);


    if (articlesStatus === REQUEST_STATUS.PENDING){
        return <h3>LOADING.....</h3>
    }
    if(articlesError){
        return <h3>Error:{error}</h3>
        }
    return (
        <>
        <div>Page Articles!</div>
        {articles.map((article) => (
            <div key={article.id}>
                <div><b>{article.title}</b></div>
                <div>{article.summary}</div>
                <br/>
            </div>
        ))}
         </>
    )
}