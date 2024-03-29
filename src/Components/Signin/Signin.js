import React from 'react';

//changed to smart component.
class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            signInEmail:'',
            signInPassword:''
        }
    }
    onEmailChange  = (event) => {
        this.setState({signInEmail: event.target.value})
    }
    onPasswordChange  = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = (event) => {
        event.preventDefault(); //https://www.w3schools.com/jquery/event_preventdefault.asp
        fetch('https://safe-scrubland-47832.herokuapp.com/signin' , {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id) {
                console.log(user);
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    }

    render () {
    
    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" autoComplete="email" 
                            name="email-address"  
                            id="email-address "
                            onChange = {this.onEmailChange}
                            />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" 
                            name="password"  autoComplete="password" 
                            id="password"
                            onChange = {this.onPasswordChange}   
                            />
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
                    </fieldset>
                    <div className="">
                    
                    <input 
                        onClick = {this.onSubmitSignIn}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in"/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick = {() => this.props.onRouteChange('signup')} className="f6 link dim black db pointer">Sign up</p>
                    <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                    </div>
                </form>
            </main>
        </article>
    );
}
}
export default Signin;
