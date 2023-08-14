import React from "react";

interface NavigationLinkProps {
  name: string;
  url: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <a href={props.url} className="nav-link">
      {props.name}
    </a>
  );
};
