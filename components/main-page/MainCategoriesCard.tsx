import Image from "next/image";
import Link from "next/link";
import { Category, Product } from "~/types";

interface IProps {
  category: Category;
  products: {
    women: Product;
    men: Product;
    kids: Product
  }
}

export const MainCategoriesCard = ({ category, products }: IProps) => {
  return (
    <Link
      href={`/categories/${category.CategoryValue}`}
      className='flex-1 p-6 flex flex-col gap-6 justify-center
              border-3 transition-colors hover:bg-toxic hover:border-black-600'
    >
      <div className='w-full aspect-square rounded-[50%] overflow-hidden border-3'>
        {/*@ts-ignore*/}
        <Image src={products[category.CatName.toLowerCase()]?.galleryImages[0].baseUrl}
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
