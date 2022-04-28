import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Layout from "../src/components/Layout"

const Home: NextPage = () => {
  return (
    <div className="font-montserrat font-medium">
      <Layout className="bg-slate-100 min-h-screen flex justify-center items-center">
        <h1 className="text-3xl">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </h1>
        Cumque nihil esse hic.
      </Layout>
    </div>
  )
}

export default Home
