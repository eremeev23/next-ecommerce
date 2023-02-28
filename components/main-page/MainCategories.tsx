import {Category, Product} from "~/types";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { MainCategoriesCard } from "~/components/main-page/MainCategoriesCard";

interface IProps {
  categories: Category[];
  products: {
    women: Product;
    men: Product;
    kids: Product
  }
}

export const MainCategories = ({ categories, products }: IProps) => {
  return (
    <>
      <h2 className='text-4xl dark:text-white text-center font-bold mb-8'>
        POPULAR CATEGORIES
      </h2>
      <div className='hidden sm:flex items-center justify-between gap-2'>
        {
          categories?.map((category) => (
            <MainCategoriesCard
              key={category.CategoryValue}
              category={category}
              products={products}
            />
          ))
        }
      </div>
      <div className='relative mb-10 block sm:hidden'>
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            el: '.main-categories-swiper-pagination',
            type: 'bullets',
            clickable: true
          }}
        >
          {
            categories?.map((category) => (
              <SwiperSlide key={category.CategoryValue}>
                <MainCategoriesCard
                  category={category}
                  products={products}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className='main-categories-swiper-pagination'></div>
      </div>
      <Link
        className='block mt-2 w-fit mx-auto text-lg font-bold dark:text-white transition-colors dark:hover:text-toxic hover:text-blue-600'
        href='/categories'
      >
        SEE ALL
      </Link>
    </>
  )
}
