import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <Header headerText="Welcome to PrivPay" />
        <p>
          PrivPay is building the world's first privacy focused personal finance
          tool!!!
        </p>
      </div>
    </Layout>
  )
}
