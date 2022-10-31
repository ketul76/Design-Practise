import React from "react";

function SignUpDesign ({signupDatas}){
return(
  <>
      <div className="part-1">
    <img className="img-1" src="img_1.png"/>
    <h1><i>{signupDatas.title1}</i></h1>
  </div>
  <div className="part-2">
    <img className="img-2" src="img_2.jpg" />
  </div>
  <div className="part-3">
    <form>
      <h3>{signupDatas.formTitle}</h3>
      <h4>{signupDatas.formDesc}</h4>
      <input type="text" placeholder="Enter your email to continue" /><br/>
      <input type="submit" value="Sign up with email"/>
      <br/>
      <h3>{signupDatas.redirectText} <a href="#">{signupDatas.redirectLinkText}</a> </h3>
    </form>
  </div>
  <div className="part-4">
    <h1>{signupDatas.title2}</h1>
    <h1 className="text">{signupDatas.title2}</h1>
    <p>{signupDatas.paragraph1}</p>
    <p>{signupDatas.paragraph2}</p>
    <p>{signupDatas.paragraph3}</p>
    <p>{signupDatas.paragraph4}</p>
  </div>
  </>
)
}

export default SignUpDesign;