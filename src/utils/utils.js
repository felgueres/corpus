import { useLocation } from "react-router-dom";

function replace_quotes(s) {
  return s.replace(/'/g, '"')
}

function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

const usePathname = ()=>{
    const location = useLocation()
    return location.pathname
}

export { replace_quotes, groupBy, usePathname};