import { useHistory } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import SimpleTitle from "../../components/texts/SimpleTitle";
import CategoryComponent from "./components/CategoryComponent";
import BackToHome from "../../components/navbars/BackToHome";
import { useEffect, useState } from "react";
import axios from "axios";
import wayang from "./../../assets/banners/wayang.png";

const Wayang = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-wayang.herokuapp.com/api/wayang/category/list")
      .then((response) => {
        setCategories(response.data.data);
      });
  }, []);

  return (
    <Layout bottom={false} navbar={true} title={"Wayang"}>
      <div className={"mt-8"}>
        <SimpleTitle>Wayang Seni Tradisonal Asli Indonesia</SimpleTitle>
        <div className={"mt-4"}>
          <img
            className={"rounded-2xl h-48 w-full object-cover"}
            src={wayang}
            alt=""
          />
        </div>
        <div className={"mt-12"}>
          <SimpleTitle>Category</SimpleTitle>
          {categories.map((item, key) => (
            <CategoryComponent
              onClick={() => {
                history.push(`/wayang/${item.id}`);
              }}
              image={item.photo}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <BackToHome />
    </Layout>
  );
};
export default Wayang;
