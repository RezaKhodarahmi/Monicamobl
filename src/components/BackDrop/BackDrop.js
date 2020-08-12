import React from 'react';
import Styled from 'styled-components';

const BackdropCss = Styled.div`
.backdrop{
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.3);
    z-index:100;
}



`;

const backdrop = props =>(
<BackdropCss>
<div className="backdrop"  onClick={props.click}/>
</BackdropCss>

);


export default backdrop;