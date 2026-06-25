import { Link, useLocation } from "react-router-dom";
import { buildBreadcrumbs, ROUTE_LABELS } from "../seo/schema";

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return null;
  }

  const label = ROUTE_LABELS[pathname];
  const crumbs = buildBreadcrumbs(pathname, label);

  return (
    <nav
      className="border-b border-gold/15 bg-cream px-[7%] py-3.5 md:px-[5%]"
      aria-label="Breadcrumb"
    >
      <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 font-body text-sm text-[#666]">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;

          return (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && <span className="mr-2 text-gold">/</span>}
              {isLast ? (
                <span aria-current="page" className="font-medium text-gold">
                  {crumb.name}
                </span>
              ) : (
                <Link to={crumb.path} className="text-ink no-underline transition hover:text-gold">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
