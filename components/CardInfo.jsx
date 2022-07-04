import React from 'react';

function CardInfo({ post }) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }
      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }
      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  }

  return (
    <div>
      <img className='w-full' src={post.featuredImage.url ? post.featuredImage.url : 'https://kimcontrols.com/uploads/image/csm_item-building-kit-system-universal-930x449_a1ca0b0011.jpg'} alt={post.title}/>
      <h1 className='text-gray-900 font-bold text-xl lg:text-4xl mb-4 mt-4 pb-4 border-b border-slate-500'>{post.title}</h1>
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item))

        return getContentFragment(index, children, typeObj, typeObj.type)
      })}
    </div>
  );
}

export default CardInfo;