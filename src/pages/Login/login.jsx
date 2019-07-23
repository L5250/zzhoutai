/* eslint-disable no-undef */
import React from 'react';
import './Login.scss'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import { post } from '../../util/axios'
import '../../util/security';
import {Cookie} from '../../util/Cookie'
// import App from '../../components/App'

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      isLogin: false
    }
  }

  componentDidMount() {
    post('/zol-cms/login/key', { token: '' }).then(res => {
      // console.log(res)
      this.setState({
        token: res.data
      })
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        let password = values.password + "@" + new Date().getTime()
        var publicKey = RSAUtils.getKeyPair(this.state.token.exponent, '', this.state.token.modulus)

        password = RSAUtils.encryptedString(publicKey, password)
        post('/zol-cms/login/password', { token: this.state.token.modulus, account: values.username, password: password }, {}).then(res => {
          console.log("111")
          console.log(res)
          if (res.code === 0) {
            Cookie.addCookie("user",res.data.token,0)
            // document.cookie = "user=" + res.data.token
            this.setState({
              Login: true
            });
            window.location.href ='/'
          }else{
            return message.warning("账号密码错误")
          }

        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-main">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <img src={require('../../static/images/loginIco.png')} alt=""></img>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入账号!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="账号"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住账号</Checkbox>)}
            <span className="login-form-forgot" >
              忘记密码？
          </span>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.submit}>
              登录
          </Button>
            {/* Or <a href="">register now!</a> */}
          </Form.Item>
        </Form>
      </div>
    );
  }
}

Login = Form.create({ name: 'normal_login' })(Login);

// export default <Login />