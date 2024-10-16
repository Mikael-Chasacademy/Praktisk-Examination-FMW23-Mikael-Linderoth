import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // Gå tillbaka en sida i historiken
      className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Tillbaka
    </button>
  );
};

export default BackButton;
