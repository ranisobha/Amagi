import React,{useState} from 'react'
import {Container,FormWrap,Icon,Form,FormButton,FormInput,FormLabel,FormH1,
    FormContent} from "./SigninElements";
    import {useNavigate} from 'react-router-dom';


function Signin() {
    const [data,setdata] = useState({
        email:"",password:""
    })
    const {email,password} = data;

    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    const onChange=(e)=>{
setdata({...data,[e.target.name]:[e.target.value]})
    }
    return (
        <div>
            <Container>
                <FormWrap>
                    <Icon to="/">Go to back</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit}>
                            <FormH1>Welcome to Signin page</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" name="email" required value={email} onChange={onChange} placeholder="Enter email..."/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" name="password" required value={password} 
                            placeholder="Enter password..." onChange={onChange} />
                            <FormButton onClick={()=>navigate("/logout")}type="submit">Login</FormButton>
                            
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}

export default Signin
