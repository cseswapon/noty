import Header from "@/Components/Common/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import variable from "./page.module.scss";
export default function Home() {
  return (
    <>
      <h1 className={variable.title}>Hello world</h1>
      <Header />
    </>
  );
}
