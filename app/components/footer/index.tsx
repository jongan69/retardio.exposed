import React from "react";
import './styles.css'

interface FooterProps {
  opensourced: string;
  opensourcedlink: string;
  poweredby: string;
  poweredbylink: string;
}

export function Footer({ opensourced, opensourcedlink, poweredby, poweredbylink }: FooterProps) {
  return (
    <footer className="footer footer-center p-4 text-base-content z-10">
      <div>
        <p>
          Created and open-sourced by{" "}
          <a
            href={opensourcedlink}
            target="_blank"
            rel="noreferrer"
            className="link link-primary"
          >
            {opensourced}
          </a>{" "}
          © 2024 - {new Date().getFullYear()}
        </p>
        <p className="text-center">
          Powered by{" "}
          <a
            href={poweredbylink}
            target="_blank"
            rel="noreferrer"
            className="link link-primary"
          >
            {poweredby}
          </a>
        </p>
      </div>
    </footer>
  );
}
