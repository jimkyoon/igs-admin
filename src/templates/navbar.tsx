import * as React from "react";
import {Button} from "@mui/material"
import { useAuthContext } from "../utils/authContext";
import PageButton from "../components/pageButton";

interface NavbarProps {
  page: any
  pages:any
  setPage:()=>void
}

const Navbar: React.FC<NavbarProps> = ({page, pages}) => {
  const { logout } = useAuthContext();

  const styling = {
    background: "#eaaaaa",
    padding: "20px",
    width: "100%",
  };
console.log({page, pages})
  return (
    <div style={styling}>
      {pages.map((p: any) => (
        <PageButton key={p}>
          {p[0].toUpperCase() + p.substring(1)}
        </PageButton>
      ))}
      <Button onClick={logout} variant="contained">Log Out</Button>
    </div>
  );
};

export default Navbar;
