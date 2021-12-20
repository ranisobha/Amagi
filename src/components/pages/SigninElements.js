import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
min-height:650px;
position:fixed;
bottom:0;
left:0;
right:0;
top:0;
z-index:0;
overflow:hidden;
background:linear-gradient(108deg,rgba(35, 7, 77, 0.6)0%,
rgba(10,201,122,1)100%)
`;
export const FormWrap = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
 `
export const FormButton = styled.button`
background:#01bf71;
padding:16px 0;
border:none;
color:#fff;
font-size:20px;
cursor:pointer;
`;

export const FormInput = styled.input`
padding:16px 16px;
margin-bottom:32px;
border:none;
border-radius:4px
`;

export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;
color:#fff;
`;

export const Icon = styled(Link)`
margin-bottom:15px;
margin-top:32px;
text-decoration:none;
color:#fff;
text-align:center;
font-weight:700;
font-size:32px;
`;

export const FormContent = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

`

export const FormH1= styled.h1`
margin-bottom:40px;
color:#fff;
font-size:20px;
text-align:center;
font-weight:400;

`
export const Form = styled.form`
background:#010101;
max-width:400px;
height:auto;
width:50%;
z-index:1;
display:grid;
padding:80px 32px;
border-radius:4px;
margin:0 auto;
box-shadow:0 1px 3px rgba(0,0,0,0.9);
`;