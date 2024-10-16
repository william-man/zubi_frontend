import { useLocation } from "react-router-dom";

const TutorProfile = () => {
  const location = useLocation();
  const { tutor } = location.state;

  return (
    <>
      <div className="h-screen bg-zubiGreen font-helonik flex flex-col items-center">
        <div className="w-10/12 mx-auto flex flex-col items-center mt-11">
          <h3 className="text-5xl mb-5">{tutor.full_name}</h3>
          <img
            src={tutor.img_source}
            className="w-11/12 mb-8 bg-white rounded-md"
          />
          <p className="font-sans leading-5">{tutor.description}</p>
          <div className="">
            <h4 className="text-3xl mt-4 mb-4 self-end ">Availability</h4>
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
    </>
  );
};

export default TutorProfile;
