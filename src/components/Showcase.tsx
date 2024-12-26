"use client";

import { HTMLAttributes, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Phone from "./Phone";
import { cn } from '@/lib/utils';
import { useRef } from "react";
import { useState } from "react";
import { useInView } from 'framer-motion'

const PHONE_IMAGES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
  "/testimonials/7.jpg",
  "/testimonials/8.jpg",
]

const splitArray = (arr: any[], arrNums: number) => {
  const result: any[] = []

  for (let i = 0; i < arr.length; i++) {
    const index = i % arrNums
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(arr[i])
  }
  // console.log(result)
  return result
}

interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
}

const ShowcaseItem = ({ imgSrc, className, ...props }: ItemProps) => {

  const ANIMATION_DELAY = [
    '0s',
    '0.1s',
    '0.2s',
    '0.3s',
    '0.4s',
    '0.5s',
  ]

  const animationDelay = ANIMATION_DELAY[Math.floor(Math.random() * ANIMATION_DELAY.length)]

  return (
    <div
      className={cn(
        'animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}>
      <Phone imgSrc={imgSrc} />
    </div>
  )
}

interface ItemColumnProps extends HTMLAttributes<HTMLDivElement> {
  showcaseItemArray: string[],
  className?: string,
  showcaseItemClassName?: (showcaseIndex: number) => string,
  speed?: number
}

const ShowcaseItemColumn = ({
  showcaseItemArray,
  className,
  showcaseItemClassName,
  speed = 0
}: ItemColumnProps) => {
  const columnRef = useRef<HTMLDivElement>(null)
  const [columnHeight, setColumnHeight] = useState(0)
  const duration = `${columnHeight * speed}ms`

  useEffect(() => {
    if (!columnRef.current) return

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current!.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  })

  return (
    <div
      ref={columnRef}
      className={cn("animate-myMarquee space-y-8 py-4", className)}
      style={{ "--myMarquee-duration": duration } as React.CSSProperties}
    >
      {showcaseItemArray.concat(showcaseItemArray).map((imgSrc, showcaseItemIndex) => (
        <ShowcaseItem
          key={showcaseItemIndex}
          className={showcaseItemClassName?.(showcaseItemIndex % showcaseItemArray.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  )
}

const ShowcaseItemGrid = () => {

  const containRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containRef, { once: true, amount: 0.4 })

  const columns = splitArray(PHONE_IMAGES, 3)
  const column1 = columns[0]
  const column2 = columns[1]
  const column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containRef}
      className='relative -mx-4 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-2 md:grid-cols-2 lg:grid-cols-3'
    >
      {isInView && (
        <>
          <ShowcaseItemColumn
            showcaseItemArray={[...column1, ...column3.flat(), ...column2]}
            showcaseItemClassName={(showcaseIndex) =>
              cn({
                "md:hidden": showcaseIndex >= column1.length + column3[0].length,
                "lg:hidden": showcaseIndex >= column1.length,
              })
            }
            speed={10}
          />
          <ShowcaseItemColumn
            showcaseItemArray={[...column2, ...column3[1]]}
            className="hidden md:block"
            showcaseItemClassName={(showcaseIndex) =>
              cn({
                "lg:hidden": showcaseIndex >= column2.length
              })
            }
            speed={15}
          />
          <ShowcaseItemColumn
            showcaseItemArray={[...column3.flat()]}
            className="hidden md:block"
            speed={10}
          />
        </>
      )}

      {/* <div className='pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-slate-100' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-slate-100' /> */}
    </div>
  )
}

const Showcase = () => {
  return (
    <MaxWidthWrapper className='relative max-w-5xl'>
      <ShowcaseItemGrid />
    </MaxWidthWrapper>
  )
}

export default Showcase;