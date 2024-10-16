import { useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import "react-day-picker/style.css";
import Button from "../components/Button/Button";

const TutorProfile = () => {
  const location = useLocation();
  const { tutor } = location.state;
  const [selected, setSelected] = useState<Date>();

  return (
    <Layout>
      <div className="min-h-screen bg-zubiGreen font-helonik flex flex-col items-center text-white">
        <div className="w-10/12 mx-auto flex flex-col items-center mt-20">
          <h3 className="text-4xl mb-5">{tutor.full_name}</h3>
          <img
            src={tutor.img_source}
            className="w-11/12 mb-8 bg-white rounded-md"
          />
          <p className="font-sans leading-5">{tutor.description}</p>
          <h4 className="text-3xl mt-10 mb-4 self-end ">Availability</h4>
          <div className="mb-12">
            <DayPicker
              className="font-sans"
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={
                selected
                  ? `Selected: ${selected.toLocaleDateString()}`
                  : "Pick a day."
              }
            />
          </div>
          <Button
            onClick={() => console.log(selected)}
            label="book"
            buttonType="cardButton"
          />
        </div>
      </div>
    </Layout>
  );
};

export default TutorProfile;
