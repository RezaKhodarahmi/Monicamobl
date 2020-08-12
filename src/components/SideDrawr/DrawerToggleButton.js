import React from 'react';

import styled from 'styled-components';

const ToggleButton = styled.div`
.toggle-button{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    height:25px;
    width:36px;
    background:transparent;
    border:none;
    cursor:pointer;
padding:0;
box-sizing:border-box;
}

.toggle-button:focus{
outline:none;
}
.toggle-button__line{
width:100%;
height:1px;
background: #000;
}
@media only screen and (min-width:768px){
    .toggle-button{
        display:none!important;
    }
}
@media only screen and (max-width:768px){
    .toggle-button{
        display:flex!important;
    }
}

`;

const drawerToggleButton = props => (
    <ToggleButton> 
        <button className="toggle-button " onClick={props.click}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />

        </button>
    </ToggleButton>

)




export default drawerToggleButton; 