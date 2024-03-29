import React from 'react';

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            name: ''
        }
    }


onEmailChange  = (event) => {
    this.setState({email: event.target.value});
}

onNameChange  = (event) => {
    this.setState({name: event.target.value});
}

onPasswordChange  = (event) => {
    this.setState({password: event.target.value});
}


onSubmitSignUp = () => {
    //event.preventDefault(); //https://www.w3schools.com/jquery/event_preventdefault.asp
    fetch('https://safe-scrubland-47832.herokuapp.com/signup' , {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
    })
    .then(response => response.json())
    .then(user => {
        if(user.id) {
            this.props.loadUser(user)
            this.props.onRouteChange('home');
        }
    });
}

    render () {
        return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" autoComplete="name" 
                        name="name"  id="name"
                        onChange = {this.onNameChange}
                        />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="email" autoComplete="email" 
                        name="email-address"  id="email-address"
                        onChange = {this.onEmailChange}
                        />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="password" name="password"  autoComplete="password" id="password"
                        onChange = {this.onPasswordChange}
                    />
                </div>
                </fieldset>
                <div className="">
                
                <input 
                    onClick = {this.onSubmitSignUp}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign up"/>
                </div>
            </div>
            </main>
        </article>
        );
    }
}
export default Signup;