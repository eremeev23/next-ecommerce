import Image from 'next/image';
import { Product, Slide } from "~/types";
import axios from "axios";
import * as process from "process";
import { useEffect } from "react";
import productsReducer, {fetchHomeProducts, fetchProducts} from "~/store/slices/products";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "~/store";
import { BannerSwiper } from "~/components/ui/BannerSwiper";
import { BannerSkeleton } from "~/components/skeletons/main-page/BannerSkeleton";
import { MainCategories } from "~/components/main-page/MainCategories";
import { CategoriesSkeleton } from "~/components/skeletons/main-page/CategoriesSkeleton";
import { HomeProducts } from "~/components/main-page/HomeProducts";
import { HomeProductsSkeleton } from "~/components/skeletons/main-page/HomeProductsSkeleton";

interface IProps {
  data: Slide[]
}

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchHomeProducts());
  }, [dispatch]);

  const products = useSelector((state: any) => state.productsReducer?.products);
  const mainCategories = useSelector((state: any) => state.categoriesReducer?.mainCategories);
  const categoriesProducts = useSelector((state: any) => state.productsReducer?.categoriesProducts);
  const homeProducts = useSelector((state: any) => state.productsReducer?.homeProducts);

  const Banner = () => {
    if (products?.length) {
      return <BannerSwiper />
    } else {
      return <BannerSkeleton />
    }
  }

  const mainCategoriesBlock = () => {
    if (mainCategories?.length) {
      return <MainCategories categories={mainCategories} products={categoriesProducts} />
    } else {
      return <CategoriesSkeleton />
    }
  }

  const homeBlock = () => {
    if (homeProducts?.length) {
      return <HomeProducts products={homeProducts} />
    } else {
      return <HomeProductsSkeleton />
    }
  }

  return (
    <main>
      <section>
        { Banner() }
      </section>
      <div className="custom-container mx-auto pt-20">
        <section className='pb-20'>
          { mainCategoriesBlock() }
        </section>
        <section className='pb-20'>
          { homeBlock() }
        </section>
      </div>
    </main>
  )
}
