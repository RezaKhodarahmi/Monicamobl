import React, { component } from 'react';
import styled from "styled-components";
import DrawerToggleButton from '../SideDrawr/DrawerToggleButton';
import { Link } from 'react-router-dom';
import { ButtonContainer } from "../Layout/Button";

const toolbar = props => (
    <Navbarcss>
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div>
                    <DrawerToggleButton click={props.drawerToggleClickHandler} />
                </div>
                <div className="toolbar__logo"><a className="text-dark">LOGO</a></div>
                <form className="mr-5 ">
                    <input type="search" placeholder="&#xF002; جستجو در مونیکا مبل..." className="search-box form-control mr-5 search-box empty" />
                </form>
                <div className="spacer" />
                <div className="toolbar__navigation__item">
                    <ul className="ml-2">
                        
                        
                        <li className="mt-1"><a href="" data-toggle="tootlipe" title="English" ><i class="fa fa-globe text-danger" aria-hidden="true"> </i> <span style={{fontSize:'0.6rem'}}>English </span></a> </li>
                        <div className="vl"></div>
                        <li className="login-btn" ><ButtonContainer login >حساب کاربری</ButtonContainer> </li>
                        <div className="vl"></div>
                        <li className="cart"><a href="/"><i
                            className="fa fa-cart-plus"
                            aria-hidden="true"
                        ></i></a></li>
                    </ul>
                </div>
            </nav>
            <nav className="nav-sec">
                
            <form className="mr-0 ">
                    <input type="search" placeholder="&#xF002; جستجو..." className="form-control mr-0 search-box-sm empty" />
                </form>
                <ul className=" navbar-menu text-right ">
                <div className="link__hover"><li><Link to="/" className="text-muted">خانه  </Link></li></div>
                         
                    <div className="link__hover"><li><Link to="products" className="text-muted">فروشگاه</Link></li></div>
                    
                    <div className="link__hover"> <li><a className="text-muted" href=""> مبل </a></li></div>
                   
                    <div className="link__hover"><li><a className="text-muted" href="">تماس با ما</a></li></div>
                    
                    <div className="link__hover"><li><a className="text-muted" href="">درباره ی ما</a></li></div>
                    
                    <div className="link__hover"><li><a className="text-muted" href="">درباره ی ما</a></li></div>

                </ul>
            </nav>
        </header>
    </Navbarcss>
);


const Navbarcss = styled.div`

.toolbar{
    position:fixed;
    width:100%;
    top:0;
    left:0;
    right:0;
    padding:2rem 0 2rem 0;
    background:#ffffff;
    height:56px;
    z-index:200;
    box-shadow:0px 1px 4px rgba(0,0,0,0.3);
    
}
.toolbar__navigation{
    display:flex;
    align-items:center;
    height:100%;
    padding:0 1rem;
    
    
}
.toolbar__logo a{
    color: #000000;
    font-size:1.5rem;
    text-decoration:none;
}
.toolbar__logo{
    margin-right:1rem;
}

.toolbar__navigation__item ul {
    list-style:none;
    margin:0;
    padding:0;
    display:flex;
}
.toolbar__navigation__item a{
    color:#000000;
    text-decoration:none;

}
.toolbar__navigation__item li {
padding:0 0.5rem;

}
.spacer{
    flex:1;
}
.toolbar__navigation__item a:hover,
.toolbar__navigation__item a:active{
    color:red;
}
.vl {
    border-left: 1px solid lightgray;
    margin-top: 0.3rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    height: 23px;
  }
  .fa-cart-plus{
      font-size:1.8rem;
      color:#D4AF37;
  }
 
  .search-box {
    width: 32rem !important;
    height:2.6rem;
    border-radius: 0.5rem;
    background-color: #f0f0f1;
    border: #f0f0f1 !important;
  }
  .search-box-sm {
    display:inline;
    width: 17rem !important;
    height:2rem;
    margin-left:0!important;
    border-radius: 0.5rem;
    background-color: #f0f0f1;
    border: #f0f0f1 !important;
  }
 
  input.empty {
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
  }
  .nav-sec{
     width:100%;
     background:#ffffff;
     height:58px;
     position:fixed;
     display:block;
     padding:1rem;
     top:3.6rem;
     
    
     text-align:right;
     box-shadow:0px 2px 2px rgba(0,0,0,0.3);
     /* border-bottom:0.03rem solid lightgray!important; */
  }
  .navbar-menu{
      width:100%!important;
      
  }
  .navbar-menu li{
    text-align:center!important;
    list-style:none;
      display:inline;
      padding: 0 0.7rem;
      margin: 0 1.5rem;
  }
  .link__hover {
    display: inline;
    
    
  }
  
  .link__hover:hover {
      padding-bottom:0.9rem;
    border-bottom: 2.5px solid #D4AF37;
    border-radius: -100%;
    
    
  }

@media only screen and (min-width:600px){
.toolbar__logo{
    margin-right:35%;
}
.search-box{
    display:none;
}
.login-btn{
    font-size:0.7rem;
}
.navbar-menu{
    display:none;
}
.login-btn ,.cart , .vl{
    display:none;
}


}
@media only screen and (max-width:600px){
.toolbar__logo{
    margin-right:29%;
   
}
.toolbar__logo a{
    
   
}
.logon-btn{
    display:none!important;
}
.search-box{
    display:none;
}
.login-btn{

    font-size:0.3rem;
    display:inline-block
    }
    
.navbar-menu{
    display:none;
}
.login-btn ,.cart , .vl{
    display:none;
}


}
@media only screen and (min-width:768px){
.toolbar__logo{
    margin-right:0%;
}
.search-box{
    display:block;
}
.navbar-menu{
    display:inline;
}
.login-btn ,.cart , .vl{
    display:inline;
}
.navbar-menu{
display:block!important;
}
.search-box-sm{
    display:none!important;
}


}
`;
export default toolbar;

