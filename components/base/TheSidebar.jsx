import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import categoriesSlice from "~/store/slices/categories";
import { Category } from "~/types";
import { SidebarListItem } from "~/components/navigations/SidebarListItem";

const customStyles = {
  overlay: {
    background: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(6px)',
  },
}

const customStylesSec = {
  overlay: {
    background: 'none',
    backdropFilter: 'none',
    pointerEvents: 'none'
  },
}

Modal.setAppElement('#__next');

export const TheSidebar = ({ active, setActive, closeModals }) => {
  const categories = useSelector((state) => state.categoriesReducer?.categories);
  const [children, setChildren] = useState([]);
  const [childActive, setChildActive] = useState(false);
  const [parentCat, setParentCat] = useState('');

  return (
    <Modal
      isOpen={active}
      onRequestClose={closeModals}
      style={customStyles}
    >
      <nav>
        <ul className='h-full flex flex-col justify-center'>
          {
            categories?.map((category) => {
              return (
                <li key={category.CatName}>
                  <SidebarListItem
                    category={category}
                    setChildren={setChildren}
                    setChildActive={setChildActive}
                    setParentCat={setParentCat}
                  />
                </li>
              )
            })
          }
        </ul>
      </nav>
      <Modal
        isOpen={childActive && !!children}
        onRequestClose={() => setChildActive(false)}
        className='children-categories-modal hidden sm:block'
        style={customStylesSec}
      >
        <nav>
          <ul
            className='h-full flex flex-col justify-center'
            onMouseLeave={() => setChildActive(false)}
          >
            {
              children?.map((category) => {
                return (
                  <li key={category.CatName}>
                    <SidebarListItem
                      category={category}
                      isParent={false}
                      parent={parentCat}
                    />
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </Modal>
    </Modal>
  )
}
