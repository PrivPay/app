/* eslint-disable quotes */
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>PrivPay's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>size</th>
              <th>base</th>
              <th>accessTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.base}</td>
                <td>{node.accessTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
          id
          base
          accessTime
          size
          relativePath
          modifiedTime
          name
        }
      }
    }
  }
`
