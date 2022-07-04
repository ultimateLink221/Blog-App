import React from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import { Card, Loading, useSearch } from '../../components';

// @ts-ignore
function FilteredPosts({ posts }) {
  {/* @ts-ignore */}
  const { search } = useSearch();
  
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <div className='container mx-auto sm:px-20 px-10 mb-8'>
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
          return <Card key={post.node.slug} post={post.node} />
        })}
    </div>
  );
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    // @ts-ignore
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

export default FilteredPosts;