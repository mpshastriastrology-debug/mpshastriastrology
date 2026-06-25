import { Link, useLocation } from "react-router-dom";
import { buildBreadcrumbs, ROUTE_LABELS } from "../seo/schema";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  const label = ROUTE_LABELS[pathname];
  const crumbs = buildBreadcrumbs(pathname, label);

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbsList">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={crumb.path} className="breadcrumbsItem">
              {isLast ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link to={crumb.path}>{crumb.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
