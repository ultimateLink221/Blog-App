import type { NextPage } from 'next'
import Head from 'next/head'
import { getPosts } from '../services'
import { Card, useSearch } from '../components'

// @ts-ignore
const Home: NextPage = ({ posts }) => {
  // @ts-ignore
  const { search } = useSearch();
  return (
    <div className="container mx-auto sm:px-20 px-10 mb-8">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* @ts-ignore */}
        {posts.filter((post) => {
          if (search === "") {
            return post
          }
          else if (post.node.title.toLowerCase().includes(search.toLowerCase())) {
            return post
          }
        },
        {/* @ts-ignore */}
        ).map((post) => {
          {/* @ts-ignore */}
          return <Card key={post.node.slug} post={post.node} />
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}

export default Home
