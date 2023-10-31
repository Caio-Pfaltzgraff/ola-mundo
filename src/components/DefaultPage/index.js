import Banner from "components/Banner";
import { Outlet } from "react-router-dom";


export function DefaultPage() {
  return (
    <main>
      <Banner />
      
      <Outlet />
    </main>
  );
};