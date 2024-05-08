import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return(
    <div>
      <Navbar />
      <div style={{
        height: 350,
        width: 300,
        backgroundColor: 'yellow',
        alignItems: "center",
        borderRadius: 30,
        padding: 20,
        boxShadow: '5px 10px 5px rgba(0, 0, 0, 0.3)',
        marginTop: 80,
      }}>
        {/* <h2>Login</h2> */}
                  <div style={{alignContent:"center", fontWeight:"bold"}}>
                    <h2 style={{marginTop: 55,}}>Login</h2>
                    <div style={{
                      marginBottom: 1,
                      width:50,
                      alignSelf: "center",
                      marginLeft:20,
                    }}>
                      <p style={{
                        textAlign:"left"
                      }}>Email</p>
                      <input
                      style={{
                        width:250,
                        height: 40,
                        alignContent:'left',
                        borderRadius: 9,
                        border: 0,
                      }}
                      type="email"
                      placeholder="Masukkan email" />
                    </div>
                    <div style={{
                      marginBottom: 1,
                      width:100,
                      alignItems: "center",
                      marginLeft:20,
                    }}>
                      <p style={{
                        textAlign:"left"
                      }}>Password</p>
                      <input
                      style={{
                        width: 250,
                        height: 40,
                        alignContent:'left',
                        borderRadius: 9,
                        border: 0
                      }}
                      type="password"
                      placeholder="Masukkan password" />
                    </div>
                  </div>
                  
        <button style={{
          marginTop: 20,
          width: 250,
          backgroundColor:'black',
          color: 'yellow'}}>
          Login</button>
      </div>
      {/* <div className="box-login">
        <h1>Login</h1>
        <form action="">
        <div>
          <label htmlFor="">Email</label>
          <input type="email"></input>
          </div>   
          <div>
          <label htmlFor="">Password</label>
          <input type="password" ></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div> */}
    </div>
  );
};

export default Login;