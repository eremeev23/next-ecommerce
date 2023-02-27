import Image from "next/image";
import Link from "next/link";
import { Category, Product } from "~/types";

interface IProps {
  category: Category;
  products?: {
    women: Product;
    men: Product;
    kids: Product
  }
}


export const MainCategoriesCard = ({ category, products }: IProps) => {
  // @ts-ignore
  const mainImg = products[category.CatName.toLowerCase()]?.galleryImages[0]?.baseUrl;
  const loader = 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

  const imgSrc: string = mainImg ? mainImg : loader;
  const imgWrapper = !mainImg
    ? 'w-full aspect-square rounded-[50%] overflow-hidden border-3 grayscale'
    : 'w-full aspect-square rounded-[50%] overflow-hidden border-3'

  return (
    <Link
      href={`/categories/${category.CategoryValue}`}
      className='flex-1 p-6 flex flex-col gap-6 justify-center
              border-3 transition-colors hover:bg-toxic hover:border-black-600'
    >
      <div
        className={imgWrapper}
      >
        <Image
          src={imgSrc}
          alt={category.CatName}
          width={288}
          height={480}
          quality={100}
          className='w-full h-full object-cover'
        />
      </div>
      <h4 className='text-center text-2xl font-bold uppercase'>
        { category.CatName }
      </h4>
    </Link>
  )
}
