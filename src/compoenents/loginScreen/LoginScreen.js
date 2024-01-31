import React from 'react'
import style from "./LoginScreen.module.css"
function LoginScreen() {




  return (
    <>
        <div id={style.spinners}>
        <div className={style.spiner}></div>
        <div className={style.spiner}></div>
        <div className={style.spiner}></div>
    </div>
    </>
  )
}

export default LoginScreen