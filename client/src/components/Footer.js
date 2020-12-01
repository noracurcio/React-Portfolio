
import React from 'react'
import {DiHtml5, DiHeroku, DiJavascript1, DiNodejsSmall, DiReact, DiMongodb, DiMysql, DiBootstrap, DiNpm, DiGithub, DiJqueryLogo   } from 'react-icons/di'





function Footer() {
    return (
        <>

      <div className="footer footer-container col-12">
        <DiJavascript1 className="footer-icons icon1 col-sm-6 col-md-1" />
        <DiHtml5 className="footer-icons icon1 col-sm-6 col-md-1" />
        <DiReact className="footer-icons icon2 col-sm-6 col-md-1" />
        <DiMongodb className="footer-icons icon3 col-sm-6 col-md-1" />
        <DiMysql className="footer-icons icon4 col-sm-6 col-md-1" />
        <DiNodejsSmall className="footer-icons icon5 col-sm-6 col-md-1" />
        <DiBootstrap className="footer-icons icon8 col-sm-6 col-md-1" />
        <DiNpm className="footer-icons icon9 col-sm-6 col-md-1" />
        <DiHeroku className="footer-icons icon10 col-sm-6 col-md-1" />
        <DiGithub className="footer-icons icon11 col-sm-6 col-md-1" />
        <DiJqueryLogo className="footer-icons icon2 col-sm-6 col-md-1" />
      </div>
      </>
    )
  }
  
  export default Footer