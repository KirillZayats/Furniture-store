import React from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";
import {
  TextElementStyle,
  ElementListStyle,
  ListStyle,
  ListCategoriesStyle,
} from "../../styled/Main/ListCategoriesStyleComp"
import { NAME_SITE } from "../../constants";
const ListCategories = () => {
  const { categories } = useSelector(
    (state) => state.categories
  );    
  const { setCategory } = useAction();

  const changeCategory = (e) => {
    setCategory(e.target.innerText);
  }

  return (
    <ListCategoriesStyle>
      <ListStyle id="categories-products">
        {categories.map((category, index) => (
          <ElementListStyle key={index} onClick={changeCategory}>
            <TextElementStyle to={`/${NAME_SITE}/products?#${category}`}>{category}</TextElementStyle>
          </ElementListStyle>
        ))}
      </ListStyle>
    </ListCategoriesStyle>
  );
};

export default ListCategories;
