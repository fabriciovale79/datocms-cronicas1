import Link from 'next/link'
import { Image } from 'react-datocms'
import cn from 'classnames'


export default function CoverPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {

  const responsiveImage = coverImage.responsiveImage

  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )

  return (
    <section>
      <div className="mb-8 md:mb-16">

        <div className="-mx-5 sm:mx-0">
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a aria-label={title}>{image}</a>
          </Link>
        ) : (
          image
        )}
        </div>

{
 //       <CoverImage
 //         title={title}
 //         responsiveImage={coverImage.responsiveImage}
  //        slug={slug}
  //      />
}
      </div>
      
    </section>
  )
}


/*

  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )

  */