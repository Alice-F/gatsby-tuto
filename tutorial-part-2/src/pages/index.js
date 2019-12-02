import React from "react"
import Header from "../components/header/header"
import Utilisateur from "../components/utilisateur/utilisateur"

export default () => (
  <div style={{ color: `purple` }}>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <Utilisateur
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </div>
)
