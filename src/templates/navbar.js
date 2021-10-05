import * as React from "react";

import PageButton from "../components/pageButton";

const Navbar = ({ page, pages, setPage }) => {
  const styling = {
    background: "#eaaaaa",
    justifyContent: "space-evenly",
    padding: "20px",
    width: "100%",
  };

  return (
    <div style={styling}>
      {pages.map((p) => (
        <PageButton key={p} onClick={() => setPage(p)} selected={p === page}>
          {p[0].toUpperCase() + p.substring(1)}
        </PageButton>
      ))}
    </div>
  );
};

export default Navbar;
