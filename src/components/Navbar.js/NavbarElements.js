import {Link as LinkR} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
display:flex;
justify-content:center;
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:1px;
z-index:1;
width:100%;
padding:0 24px;
max-width:1100px;
`;

export const NavLogo=styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
font-family: Paytone One;
display:flex;
margin-top:1.5rem;
font-size:50px;
font-weight:900;
align-items:center;
font-weight:bold;
text-decoration:none;
`;
export const MobileIcon = styled.div`
display:none;
@media screen and(max-width:768px){
    display:block;
    top:0;
    position:absolute;
    right:0;
    transform:trnaslate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    color:#fff;
}
`
export const NavMenu = styled.ul`

display:flex;
align-items:center;
list-style:none;
cursor:pointer;
text-align:center;
margin-right:-150px;
margin-top:1.5rem;
@media screen and (max-width:768px){
    display:none;
}
`;

export const NavItem = styled.li`
 height:30px;
 margin-top:22px;
 margin-right:2em
 
`;
export const NavLinks = styled.nav`
color:#fff;
display:flex;
align-items:center;
font-weight:900;
padding:0 1rem
height:100%
cursor:pointer;
text-decoration:none;


&.active{
    border-bottom: 3px solid #01bf71;
}`;

export const NavBtn = styled.nav`
display:flex;
@media screen and (max-width:768px){
    display:none;
    font-weight:900;
}`

export const NavBtnLink=styled.div`
border-radius:5px;
font-weight:900;
background:orange;
white-space:nowrap;
padding:5px 20px;
margin-bottom:2rem;
color:#fff;
ouline:none;
border:none;
cursor:pointer;
font-size:16px;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background:orange;
    color:#010606;
}
`
