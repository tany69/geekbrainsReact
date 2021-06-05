import React from 'react';
import {REQUEST_STATUS} from './../../utils/constlist';
import {ANIME_REQUEST, ANIME_FAILURE, ANIME_SUCCESS} from './actions';


const initialState= {
    newsList:[],
    request:{
        status:REQUEST_STATUS.IDLE,
        error:""
    }
}

export const animeReduser=(state=initialState, action)=>{
    switch ( action.type ){
        case ANIME_REQUEST:{
            return {
                ...state,
                request:{
                    status:REQUEST_STATUS.PENDING,
                    error:"",
                }
            }
        }
        case ANIME_FAILURE:{
            return{
                ...state,
                request:{
                    status:REQUEST_STATUS.FAILURE,
                    error:action.error,
                }
            }
        }
        case ANIME_SUCCESS:{
            return{
                ...state,
                newsList:action.animenews,
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
