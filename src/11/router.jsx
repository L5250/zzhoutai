import React from 'react'
import {HashRouter,Route} from 'react-router-dom';
import Page from './page';
import Page1 from "./page1";
import Page2 from './page2';



export default class BaseLayout extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <HashRouter>
                <Route path= '/' exact component ={Page} />
                <Route path = '/1'  component ={Page1} />
                <Route path = '/2'  component ={Page2} />

            </HashRouter>
        )
    }
}


// export default class BaseLayout extends React.Component{
//     render(){
//     return(

//         <HashRouter>
//             <Route path = '/' exact component={HomePage} />
//             <Route path = '/about' exact component={AboutPage} />
//             <Route path = '/contact' exact component={ContactPage} />
//             <Route path = '/login' exact component={LoginPage} />
//             <Route path = '/reginster' exact component={RegisterPage} />
//             <Route path = '/me' exact component={ProfilePage} />
//         </HashRouter>

//     )
// }
// };
// const HomePage = () => {return(<div onClick={()=>{window.location.href = "/#/about"}}>This is a Home Page</div>)}
// const LoginPage = () => <div>This is a Login Page</div>
// const RegisterPage = () => <div>This is a Register Page</div>
// const ProfilePage = () => <div>This is a Profile Page</div>
// const AboutPage = () => <div>This is a About Page</div>
// const ContactPage = () => <div>This is a Contact Page</div>