interface Tutor {
  id: number;
  full_name: string;
  address: string;
  email: string;
  phone_number: string;
  postal_code: string;
  availability: null | string;
  created_at: string;
  fk_subject_id: null | number;
  fk_tutortype_id: null | number;
}

interface CardProps {
  tutor: Tutor;
}

const Card = ({ tutor }: CardProps) => {
  return (
    <div className="p-8 rounded-md font-helonik tutor-card mb-6 bg-zubiGreen w-3/4 m-auto text-white flex flex-col gap-7">
      <h3 className="text-2xl">{tutor.full_name}</h3>
      <div className="h-44 w-64 bg-white rounded-md"></div>
      <p className="font-sans leading-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit mollitia
        eius ipsam fugit, possimus tenetur saepe labore tempore sit ratione
        doloribus molestiae.
      </p>
      <button className="bg-white text-zubiText py-4 px-9 rounded-full text-xl">
        learn from me
      </button>
    </div>
  );
};

export default Card;
