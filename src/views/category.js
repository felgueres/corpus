import React from "react";
import { CompanyDirectory } from "../components";
import { CATEGORIES } from "../utils";

export const Category = ({ match }) => {
  let name = match.params.category
  let c = CATEGORIES[name]
  return (
    <div id='categoryview'>
      <h1>{c.humanReadable}</h1>
      <CompanyDirectory category={c} />
    </div>
  );
};

export default Category;
