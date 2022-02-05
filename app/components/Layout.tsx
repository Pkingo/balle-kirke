import { FC } from "react";
import { Banner } from "~/components/Banner";
import { Header } from "~/components/header";

export const Layout: FC = ({ children }) => (
  <div>
    <Header />
    <Banner />
    <main className="w-main mx-auto flex justify-between">{children}</main>
  </div>
);
