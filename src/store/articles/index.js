import React from 'react';
import {REQUEST_STATUS} from './../../utils/constlist';
import {ARTICLE_REQUEST, ARTICLE_FAILURE, ARTICLE_SUCCESS} from './actions';


const initialState= {
    articlesList:[],
    request:{
        status:REQUEST_STATUS.IDLE,
        error:""
    }
}

export const articleReduser=(state=initialState, action)=>{
    switch ( action.type ){
        case ARTICLE_REQUEST:{
            return {
                ...state,
                request:{
                    status:REQUEST_STATUS.PENDING,
                    error:"",
                }
            }
        }
        case ARTICLE_FAILURE:{
            return{
                ...state,
                request:{
                    status:REQUEST_STATUS.FAILURE,
                    error:action.error,
                }
            }
        }
        case ARTICLE_SUCCESS:{
            return{
                ...state,
                articlesList:action.articles,
                request:{
                    status:REQUEST_STATUS.SUCCESS,
                    error:"",
                }
            }
        }
        default:
            return  state;

        }
    };
