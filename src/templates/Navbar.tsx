import { Button } from "@mui/material";
import React from "react";
import { useAuthContext } from "../utils/authContext";
import PageButton from "../components/PageButton";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

enum Routes {
  ARTICLES = "/articles",
  GREETINGS = "/greetings",
  SOUNDS = "/sounds",
  STORIES = "/stories",
}

const pages = [
  {
    title: "Articles",
    route: Routes.ARTICLES,
  },
  {
    title: "Greetings",
    route: Routes.GREETINGS,
  },
  {
    title: "Sounds",
    route: Routes.SOUNDS,
  },
  {
    title: "Stories",
    route: Routes.STORIES,
  },
];
const Navbar: React.FC = () => {
  const { logout } = useAuthContext();
  const location = useLocation();

  return (
    <div
      style={{
        background: "#eaaaaa",
        padding: "20px",
        width: "100%",
      }}
    >
      {pages.map((page) => (
        <PageButton selected={location.pathname === page.route}>
          <Link to={page.route}>{page.title}</Link>
        </PageButton>
      ))}
      <Button onClick={logout} variant="contained">
        Log Out
      </Button>
    </div>
  );
};

export default Navbar;
