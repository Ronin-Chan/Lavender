import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import CommentMarquee from "@/components/CommentMarquee"
import { Icons } from '@/components/Icons';
import Showcase from "@/components/Showcase";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="bg-slate-50 grainy-light">
        <MaxWidthWrapper className='pb-20 pt-8 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 lg:pt-20 xl:pt-28 lg:pb-32'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-14 hidden lg:block'>
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
                <img src='/flower1.png' className='w-full' />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Your Image on a{' '}
                <span className='bg-purple-400 px-2 text-white rounded-lg'>Custom</span>{' '}
                Phone Case
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Capture your favorite memories with your own,{' '}
                <span className='font-semibold'>one-of-one</span> phone case.
                {' '}
                <span className="text-purple-500">Lavender</span> allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-400' />
                    High-quality, durable material
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-400' />2 year
                    print guarantee
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-purple-400' />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user1.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user2.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user3.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user4.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user5.jpg'
                    alt='user image'
                  />
                  <img
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/user6.jpg'
                    alt='user image'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-purple-400 fill-purple-400' />
                    <Star className='h-4 w-4 text-purple-400 fill-purple-400' />
                    <Star className='h-4 w-4 text-purple-400 fill-purple-400' />
                    <Star className='h-4 w-4 text-purple-400 fill-purple-400' />
                    <Star className='h-4 w-4 text-purple-400 fill-purple-400' />
                  </div>

                  <p>
                    <span className='font-semibold'>1000+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <img
                src='/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              />
              <img
                src='/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
              />
              <Phone className='w-64' imgSrc='/testimonials/8.jpg' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 grainy-dark">
        <MaxWidthWrapper className='flex flex-col items-center gap-6 sm:gap-8'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-20 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              Our Lovely{' '}
              <span className='relative px-2'>
                Customers{' '}
                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-purple-500' />
              </span>
            </h2>
            <img src='/flower2.png' className='w-24 order-0 lg:order-2 mt-20' />
          </div>
          <CommentMarquee />
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 grainy-dark">
        <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-20'>
          <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
            <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
              Awesome{' '}
              <span className="text-purple-400">Showcase</span>
            </h2>
            <img src='/flower3.png' className='w-24 order-0 lg:order-2' />
          </div>
          <Showcase />
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 grainy-light">
        <MaxWidthWrapper className="flex flex-col justify-center items-center">
          <div className="text-center px-8 text-balance mt-16 md:mt-20">
            <h2 className="tracking-tight text-balance text-5xl md:text-6xl font-bold !leading-tight">Upload your photo and get <span className="bg-purple-300 text-white rounded-md">your own case</span> now</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-14 md:gap-8 items-center justify-center mt-16 md:mt-20">
            <div className="w-72 md:min-w-72 p-4 object-cover rounded-xl ring-1 ring-gray-900/10 shadow-lg">
              <img src='/cat.jpg' className="p-1 rounded-lg" />
            </div>
            <img src='/arrow.png' className="p-1 rotate-90 md:rotate-0 w-32 md:w-36" />
            <Phone imgSrc='/cat-phone.jpg' className="w-60 md:min-w-60 md:max-w-72 object-cover" />
          </div>
          <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit mb-16'>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />
              High-quality silicone material
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />
              Scratch- and fingerprint resistant coating
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className='w-fit'>
              <Check className='h-5 w-5 text-purple-600 inline mr-1.5' />5 year
              print warranty
            </li>

            <div className='flex justify-center'>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'mx-auto mt-8',
                })}
                href='/configure/upload'>
                Create your case now <ArrowRight className='h-4 w-4 ml-1.5' />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>

    </div>
  );
}
