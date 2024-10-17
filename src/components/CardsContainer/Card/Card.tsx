import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

interface Tutor {
  id: number;
  full_name: string;
  address: string;
  email: string;
  phone_number: string;
  postal_code: string;
  availability: null | string;
  description: string;
  created_at: string;
  fk_subject_id: null | number;
  fk_tutortype_id: null | number;
  img_source: string;
}

interface CardProps {
  tutor: Tutor;
}

const Card = ({ tutor }: CardProps) => {
  const navigate = useNavigate();

  const handleLearnWithMeClick = () => {
    // Navigate to the TutorProfile route, passing tutor details in state
    navigate("/tutorprofile", { state: { tutor } });
  };

  return (
    <div className="mb-16 p-8 rounded-md font-helonik tutor-card bg-zubiGreen w-10/12 m-auto text-white flex flex-col items-center gap-7">
      <h3 className="text-2xl">{tutor.full_name}</h3>
      <img src={tutor.img_source} className="h-44 w-64 bg-white rounded-md" />
      <p className="font-sans leading-5">{tutor.description}</p>
      <Button
        onClick={handleLearnWithMeClick}
        label="learn with me"
        buttonType="cardButton"
      />
    </div>
  );
};

export default Card;
