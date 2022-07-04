import React from 'react';
import { CardInfo, Loading } from '../components';
import { getPosts, getPostDetails } from '../services';
import { useRouter } from 'next/router';

// @ts-ignore
function CardInfoPage({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto sm:px-20 px-10 mb-8'>
      <CardInfo post={post}/>
    </div>
  );
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    // @ts-ignore
    paths: posts.map(({node: { slug }}) => ({ params: { slug }})),
    fallback: true,
  }
}

export default CardInfoPage;