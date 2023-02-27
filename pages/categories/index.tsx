import { useSelector } from "react-redux";
import { Category } from "~/types";
import { MainCategoriesCard } from "~/components/main-page/MainCategoriesCard";

const Categories = () => {
  const categories = useSelector((state: any) => state.categoriesReducer?.categories);

  return (
    <main className='custom-container'>
      {
        categories.map((category: Category) => {
          return (
            <div key={category.CategoryValue}>
              { category.CatName }
            </div>
          )
        })
      }
    </main>
  )
}

export default Categories;
