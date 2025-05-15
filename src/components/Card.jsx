export default function Card({ user }) {
  const { firstName, image, address, university } = user;
  const { city } = address;

  return (
    <>
      <div className="card">
        <figure className="card-figure">
          <img src={image} alt={firstName} />
        </figure>
        <div className="card-info">
          <p className="card-title">{firstName}</p>
          <p>{city}</p>
          <p>{university}</p>
        </div>
      </div>
    </>
  );
}
