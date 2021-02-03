import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="Contact" />
        <p>
          Send us a message!{" "}
          <a href="malito:josh@seefraud.com">hello@privpay.com</a>
        </p>
      </div>
    </Layout>
  )
}
