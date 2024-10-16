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
  return (
    <div className="mb-16 p-8 rounded-md font-helonik tutor-card bg-zubiGreen w-3/4 m-auto text-white flex flex-col gap-7">
      <h3 className="text-2xl">{tutor.full_name}</h3>
      <img src={tutor.img_source} className="h-44 w-64 bg-white rounded-md" />
      <p className="font-sans leading-5">{tutor.description}</p>
      <button className="bg-white text-zubiText py-4 px-9 rounded-full text-xl">
        learn from me
      </button>
    </div>
  );
};

export default Card;
