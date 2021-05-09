import React, { useEffect, useState, useCallback } from "react";


export default class App extends React.Component{
    state = {
        text:'Hello world,2021!'
    };

    render(){
        setTimeout(()=> this.setState({'text':' С праздником Великой Победы!'}),1000);
        return(
                <h1>{this.state.text}</h1>
        )

    }
};


