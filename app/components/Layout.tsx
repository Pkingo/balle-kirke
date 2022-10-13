import { FC } from "react";
import { Banner } from "~/components/Banner";
import { Header } from "~/components/header";

export const Layout: FC = ({ children }) => (
  <div>
    <Header />
    <Banner />
    <main className="mt-4 mb-8 gap-8 w-main mx-auto flex justify-between flex-col lg:flex-row px-8 lg:px-0">
      {children}
    </main>
  </div>
);
