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
    <div className="tutor-card mb-6">
      <h3>{tutor.full_name}</h3>
      <p>{tutor.email}</p>
      <p>{tutor.phone_number}</p>
      <p>{tutor.address}</p>
    </div>
  );
};

export default Card;
