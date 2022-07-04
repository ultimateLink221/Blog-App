import React from 'react';
import Link from 'next/link';
import moment from 'moment';

function Card({ post }) {
  return (
    <Link href={`/${post.slug}`}>
      <div className='max-w-full w-full rounded-t rounded-b shadow-md cursor-pointer mb-8'>
        <img className='w-full rounded-t' src={post.featuredImage.url ? post.featuredImage.url : 'https://kimcontrols.com/uploads/image/csm_item-building-kit-system-universal-930x449_a1ca0b0011.jpg'} alt="Main Picture for Article" />
        <div className='px-2 pt-4 pb-2'>
          <div className="flex items-center flex-wrap">
            <img className="w-10 h-10 rounded-full mr-4" src={post.author.photo.url ? post.author.photo.url : "https://kimcontrols.com/uploads/image/csm_item-building-kit-system-universal-930x449_a1ca0b0011.jpg"} alt="Picture of Author" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{post.author.name}</p>
              <p className="text-gray-600">{moment(post.createdAt).format('MMM DD YYYY')}</p>
            </div>
            {/* edit m later? */}
            {post.tags.map((item, index) => {
              return (
                item === 'Dessert' ?
                <span key={index} className="inline-block bg-yellow-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-2 sm:ml-3 mb-2 mx-3 mt-0 sm:mt-0">{item}</span>
                : item === 'Drink' ?
                <span key={index} className="inline-block bg-cyan-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-2 sm:ml-3 mb-2 mx-3 mt-0 sm:mt-0">{item}</span>
                : item === 'Food' ?
                <span key={index} className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ml-2 sm:ml-3 mb-2 mx-3 mt-0 sm:mt-0">{item}</span>
                : null
                ) 
              })}
          </div>
          <div>
            <h1 className='text-gray-900 font-bold text-xl lg:text-4xl mb-2 mt-4 hover:underline'>{post.title}</h1>
            <p className='text-gray-700 text-base pb-1 lg:text-xl '>{post.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;