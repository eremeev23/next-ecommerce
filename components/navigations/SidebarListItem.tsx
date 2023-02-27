import Link from "next/link";
import { Category } from "~/types";

interface IProps {
  category: Category;
  setChildren?: Function;
  setChildActive?: Function;
  setParentCat?: Function;
  parent?: string;
}

export const SidebarListItem = ({ category, setChildren, setChildActive, setParentCat, parent }: IProps) => {
  const childrenCategories = () => {
    if (category.CategoriesArray?.length) {
      return `(${category.CategoriesArray.length})`
    } else {
      return ``
    }
  }

  const mouseEnterHandler = () => {
    if (setChildActive && setParentCat) {
      setChildActive(true);
      setParentCat(category.CategoryValue);
    }
  }

  const linkHref = !!parent
    ? `/categories/${parent}/${category.tagCodes[0] ? category.tagCodes[0] : category.CategoryValue}`
    : `/categories/${category.tagCodes[0] ? category.tagCodes[0] : category.CategoryValue}`;

  return (
    <div>
      <Link
        href={linkHref}
        className='block w-full text-left py-3 uppercase text-lg font-bold transition-colors hover:text-blue-600'
        onMouseEnter={mouseEnterHandler}
        onMouseOver={() => setChildren ? setChildren(category.CategoriesArray) : null}
      >
        { category.CatName } <span>{ childrenCategories() }</span>
      </Link>
    </div>
  )
}
