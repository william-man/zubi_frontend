import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const TutorProfile = () => {
  const location = useLocation();
  const { tutor } = location.state;

  return (
    <Layout>
      <div className="h-screen bg-zubiGreen font-helonik flex flex-col items-center text-white">
        <div className="w-10/12 xl:w-1/2 mx-auto flex flex-col items-center mt-20">
          <h3 className="text-4xl mb-5">{tutor.full_name}</h3>
          <img
            src={tutor.img_source}
            className="w-11/12 xl:w-2/3 mb-8 bg-white rounded-md"
          />
          <p className="font-sans leading-5">{tutor.description}</p>
          <div className="">
            <h4 className="text-3xl mt-10 mb-4 self-end ">Availability</h4>
            <div className="font-sans">
              <p>Monday:</p>
              <p>Tuesday:</p>
              <p>Wednesday:</p>
              <p>Thursday:</p>
              <p>Friday:</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TutorProfile;
