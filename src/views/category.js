import React from "react";
import { CompanyDirectory } from "../components";
import { CATEGORIES } from "../utils";

export const Category = ({ match }) => {
  let name = match.params.category
  let c = CATEGORIES[name]
  return (
    <div id='categoryview'>
      <CompanyDirectory category={c} />
    </div>
  );
};

export default Category;
