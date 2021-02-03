import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <Header headerText="About PrivPay" />
        <p>
          PrivPay was founded in 2021 with the goal of helping people keep their
          financial life private.
        </p>
      </div>
    </Layout>
  )
}
