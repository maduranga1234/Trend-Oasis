import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Button, Radio, RadioGroup } from '@headlessui/react';
import { Box, Grid, LinearProgress, Rating } from '@mui/material';
import ProductReviewCard from './ProductReviewCard';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <section className='grid grid-cols-1 px-4 pt-10 lg:grid-cols-2 gap-x-8 gap-y-10'>
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] ">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="flex flex-wrap justify-center space-x-5">
              {product.images.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3 max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="px-4 pb-16 lg:col-span-1 max-auto max-w-2x1 sm:px-6 lg:max-w-7x1 lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg font-semibold text-gray-900 lg:text-xl">Universaloutfit</h1>
              <h1 className='pt-1 text-lg text-gray-900 lg:text-xl opacity-60'>
                Casual Puff Sleeves Solid Women White Top
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex items-center mt-6 space-x-5 text-lg text-gray-900 lg:text-xl'>
                <p className='font-semibold '>
                  $199
                </p>
                <p className='line-through opacity-50'>
                  $211
                </p>
                <p className='font-semibold text-green-600'>
                  5% off
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className='flex items-center space-x-3'>
                  <Rating name="read-only" value={4.5} readOnly />
                  <p className='text-sm font-medium text-indigo-600 opacity-50 hover:text-indigo-500'>56540 Rating</p>
                  <p>8324 Reviews</p>
                </div>
              </div>

              <form className="mt-10">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ checked, focus }) =>
                            classNames(
                              size.inStock
                                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                : 'cursor-not-allowed bg-gray-50 text-gray-200',
                              focus ? 'ring-2 ring-indigo-500' : '',
                              'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                            )
                          }
                        >
                          {({ checked, focus }) => (
                            <>
                              <span>{size.name}</span>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    checked ? 'border-indigo-500' : 'border-transparent',
                                    focus ? 'border' : 'border-2',
                                    'pointer-events-none absolute -inset-px rounded-md'
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
                                >
                                  <svg
                                    className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-[#9155fd] border border-transparent rounded-md hover:bg-[#7b44d9] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*rating and rews */}
        <section>
       <h1 className='pb-4 text-lg font-semibold'>Recent Review & Rating</h1>
       <div className='p-5 border'>
          <Grid container spacing={7}>
        <Grid item xs={7}>
         <div className='space-y-5'>

          {[1,1,1].map((item)=><ProductReviewCard/>)}

         </div>
        </Grid>
         <Grid item xs={5}>
        <h1 className='pb-1 text-xl font-semibold'> Product Rating</h1>
        <div className='flex items-center space-x-3'>
            <Rating value={4.6} precision={.5} readOnly/>
            <p className='opacity-60'>594890 Rating</p>
          
        </div>
        <Box className="mt-5">
            <Grid container alignItems="center" gap={2}>
               <Grid item xs={2}>
                <p>Excellent</p>
               </Grid>
               <Grid item xs={7}>
               <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant='determinate' value={60} color='success' />
            
               </Grid>
            </Grid>

            <Grid container alignItems="center" gap={2}>
               <Grid item xs={2}>
                <p>Very Good</p>
               </Grid>
               <Grid item xs={7}>
               <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant='determinate' value={50} color='success' />
            
               </Grid>
            </Grid>
            <Grid container alignItems="center" gap={2}>
               <Grid item xs={2}>
                <p>Good</p>
               </Grid>
               <Grid item xs={7}>
               <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant='determinate' value={40} color='success' />
            
               </Grid>
            </Grid>
            <Grid container alignItems="center" gap={2}>
               <Grid item xs={2}>
                <p>Avarage</p>
               </Grid>
               <Grid item xs={7}>
               <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant='determinate' value={30} color='success' />
            
               </Grid>
            </Grid>
            <Grid container alignItems="center" gap={2}>
               <Grid item xs={2}>
                <p>Poor</p>
               </Grid>
               <Grid item xs={7}>
               <LinearProgress sx={{bgcolor:"#d0d0d0",borderRadius:4,height:7}} variant='determinate' value={20} color='success' />
            
               </Grid>
            </Grid>
            
        </Box>
         </Grid>

        </Grid>

       </div>
        </section>
      </div>
    </div>
  );
}
