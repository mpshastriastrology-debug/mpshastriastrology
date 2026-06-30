import { useEffect, useId, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { filterRoutes } from "../seo/searchIndex";
import "./HeaderSearch.css";

export default function HeaderSearch({ onNavigate, className = "" }) {
  const listId = useId();
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = filterRoutes(query);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goTo(path) {
    navigate(path);
    setQuery("");
    setOpen(false);
    onNavigate?.();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (results[0]) {
      goTo(results[0].path);
    }
  }

  return (
    <div
      ref={wrapRef}
      className={`headerSearch ${open ? "headerSearchOpen" : ""} ${className}`.trim()}
    >
      <button
        type="button"
        className="headerSearchToggle"
        aria-label={open ? "Close search" : "Open site search"}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          setOpen((value) => !value);
          if (!open) {
            window.requestAnimationFrame(() => inputRef.current?.focus());
          }
        }}
      >
        {open ? <X size={20} strokeWidth={2} /> : <Search size={20} strokeWidth={2} />}
      </button>

      {open && (
        <form className="headerSearchPanel" onSubmit={handleSubmit}>
          <Search className="headerSearchInputIcon" size={18} strokeWidth={2} aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages & services…"
            aria-label="Search site pages and services"
            autoComplete="off"
          />
          {query.trim() && (
            <ul id={listId} className="headerSearchResults" role="listbox">
              {results.length === 0 ? (
                <li className="headerSearchEmpty">No matching pages</li>
              ) : (
                results.map(({ path, label }) => (
                  <li key={path}>
                    <button type="button" role="option" onClick={() => goTo(path)}>
                      <span>{label}</span>
                      <small>{path}</small>
                    </button>
                  </li>
                ))
              )}
            </ul>
          )}
        </form>
      )}
    </div>
  );
}
