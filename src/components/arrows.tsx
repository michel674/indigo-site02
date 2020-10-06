import styled from 'styled-components';
import React from 'react';
import Slider from "react-slick";



export const LeftArrow = (props: any) => {
    return(
        <button type="button" className={`button button--text button--icon`}  aria-label={props.to}>
         <i className="fas fa-angle-right" ></i>
        </button>
        
    )
};