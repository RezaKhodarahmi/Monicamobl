import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const SideDrowerCss = Styled.div`
.side-drower {
    height:100%;
    background:#ffffff;
    box-shadow:1px 0 7px rgba(0,0,0,0.5);
    position:fixed;
   
    top:-10px;
    right:-17px;
    width:60%;
    max-width:350px;
    z-index:200;
    transform:translateX(100%);
    transition:transform 0.4s ease-out;

    
}
.side-drawer.open{
    height:100%;
    background:#ffffff;
    box-shadow:1px 0 7px rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    right:0px;
    width:60%;
    max-width:350px;
    z-index:200;
    transform:translateX(0%)!important;
    transition:transform 0.4s ease-in;

    

}
.side-drower,.side-drawer.open ul{

height:100%;
display:flex;
list-style:none;
flex-direction:column;
justify-content:center;
margin-right:2rem;
}
.side-drower,.side-drawer.open li{
margin:0.5rem 0
}
.side-drower,.side-drawer.open a{
    color:#000000;
    text-decoration:none;
}
.side-drower,.side-drawer.open a:hover,
.side-drower,.side-drawer.open a:active{
    color:red;
}

`;
const sideDrawer = props => {
    let drawerClasses = 'side-drower text-right';
    if(props.show)
    {
        
        drawerClasses = 'side-drawer open text-right'
    }
    return(
    <SideDrowerCss>

        <nav className={drawerClasses} >
            <ul >
            <li><Link className="text-muted " to="/">خانه </Link></li>
                    <li><Link className="text-muted" to="/products" >فروشگاه</Link></li>
                    <li><Link className="text-muted" > مبل </Link></li>
                    <li><Link className="text-muted">تماس با ما</Link></li>
                    <li><Link className="text-muted" >درباره ی ما</Link></li>


            </ul>
        </nav>

    </SideDrowerCss>

)};

export default sideDrawer;