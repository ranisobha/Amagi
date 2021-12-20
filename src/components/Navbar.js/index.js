import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, NavbarContainer, NavBtnLink,  NavItem, NavMenu, NavLinks, NavLogo } from './NavbarElements'
function Navbar() {
    const navigate = useNavigate();
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">amagi</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" >Careers</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavBtnLink to="/signin" onClick={()=>navigate("/signin")}>Sign in</NavBtnLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar
