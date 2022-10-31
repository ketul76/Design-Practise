import React from 'react';

function LoginDesign({loginDesignData}) {
  return (
    <>
    <div>
    <div className="title">
      <img src="img_1.png" />
      <h1>{loginDesignData.title}</h1>
    </div>
    <form>
      <input type="text" placeholder="Your email..." />
      <input type="password" placeholder="Your password..."/>
      <input type="submit" value="Let's Go"/>
    </form>
    <h4>{loginDesignData.redirectText}<a href="#">{loginDesignData.redirectLinkText}</a></h4>
    <h3>{loginDesignData.forgotText}</h3>
  </div>
  </>
  );
}

export default LoginDesign;