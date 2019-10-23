import React from "react"

const HeaderContainer = (props) => {
   return <Header token={props.token}/>
}

let MapStateToProps = (state) => {
   return {
      token: authorizationPage.token
   }
}

export default connect(MapStateToProps, null)(HeaderContainer)