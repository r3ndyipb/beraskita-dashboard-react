import React, {Component} from 'react';
import {Link, Route, Router, hashHistory} from 'react-router';
//import Api from 'superagent';

import logo from '../image/logo.png';

import '../bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../bower_components/font-awesome/css/font-awesome.min.css';
import '../bower_components/Ionicons/css/ionicons.min.css';
import '../dist/css/AdminLTE.css';
import '../dist/css/skins/_all-skins.min.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = ({
          serverLogin:'http://103.43.44.124:8080/beraskita-usermanagement-webservice',
        })
      }
    render(){
        document.getElementById('base').className = 'login-page';
/*        const base64 = require('base-64');

        Api
        .get(this.state.serverDashboard + '/user-stocks/total-stock?firstDate=01/04/2018 10:10:10&lastDate=10/4/2018 10:10:10')
        .set('Authorization', 'Basic ' + base64.encode("username:password"))
        .set('Accept', 'application/json')
        .then(function(res) {
            alert(JSON.stringify(res));
        });
*/        
        return (
            <div class="login-box">

                <div className="login-box-body">
                    <p className="login-box-msg"></p>
                    <div className="login-logo">
                        <img src={ logo } />
                    </div>

                    <form action="main.html" method="post">
                    <span>ID Retailer</span>
                    <div className="form-group has-feedback">
                        <input style={{borderRadius:3, backgroundColor:'#f5f5f5'}} type="email" className="form-control" placeholder="" />
                    </div>

                    <span>Password</span>
                    <div className="form-group has-feedback">
                        <input style={{borderRadius:3, backgroundColor:'#f5f5f5'}} type="password" className="form-control" placeholder="" />
                        <span className="glyphicon glyphicon-eye-open form-control-feedback"></span>
                    </div>
                    <div className="row">
                        <div className="col-xs-12" style={{paddingTop:20}}>
                            <button type="submit" className="btn btn-success btn-block btn-flat" style={{borderRadius:24}}>Masuk</button>
                        </div>
                    </div>
                    </form>

                    <div className="text-center" style={{paddingTop:30}}>
                    <a href="">Lupas Password?</a><br />
                    <button onClick={() => hashHistory.push('/dashboard')}></button>
                    Belum punya ID? <a href="register.html" className="text-center">Daftar</a>
                    </div>

                </div>
            </div>
        )
    }
}