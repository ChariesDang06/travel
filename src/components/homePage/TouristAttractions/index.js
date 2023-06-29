import BlogItem from "./BlogItem";
import { blogs } from "./setting";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../router/paths";
import { useContext } from "react";
import { GlobalStateContext } from "../../../handler/useReducer";

const TouristAttractions = () => {
  const { contentTranslated } = useContext(GlobalStateContext);
  console.log(contentTranslated);
  return (
    <section class="item touristAttractions" id="touristAttractions">
      <ul class="heading showtotop delay-02">
        <li id="sectionHeader">{contentTranslated.prominentPlace}</li>
      </ul>
      <div class="sub-heading showtotop delay-04">
        <p>{contentTranslated.prominentPlaceDescribe}</p>
      </div>
      <div class="box-container">
        {blogs.map((blog) => (
          <BlogItem key={blog.title} blog={blog} />
        ))}
      </div>
      <Link
        to={`${PATH_DASHBOARD.Intermediary}/1`}
        class="btnDetail showtotop delay-16"
      >
        Xem thêm
      </Link>
    </section>
  );
};

export default TouristAttractions;
