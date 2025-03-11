import { Link } from "react-router-dom";

const cities = [
    { name: "Islamabad", image: "https://flypakistan.pk/assets/img/City/Islamabad.jpg", hotels: 72, attractions: 32, link: "/Islamabad_info" },
    { name: "Lahore", image: "https://flypakistan.pk/assets/img/City/Lahore.jpg", hotels: 67, attractions: 45, link: "/Lahore_info" },
    { name: "Skardu", image: "https://flypakistan.pk/assets/img/City/Skardu.jpeg", hotels: 54, attractions: 26, link: "/Skardu_info" },
    { name: "Hunza", image: "https://flypakistan.pk/assets/img/City/Hunza.jpeg", hotels: 60, attractions: 18, link: "/Hunza_info" },
    { name: "Karachi", image: "https://flypakistan.pk/assets/img/City/Karachi.jpg", hotels: 80, attractions: 25, link: "/Karachi_info" },
    { name: "Naran", image: "https://flypakistan.pk/assets/img/City/Naran.jpg", hotels: 50, attractions: 20, link: "/Naran_info" },
    { name: "Nathia Gali", image: "https://flypakistan.pk/assets/img/City/Nathiagali.jpg", hotels: 40, attractions: 15, link: "/Nathiagali_info" },
    { name: "Faisalabad", image: "https://flypakistan.pk/assets/img/City/Faisalabad.jpeg", hotels: 55, attractions: 22, link: "/Faisalabad_info" },
    { name: "Gilgit", image: "https://flypakistan.pk/assets/img/City/Gilgit.jpg", hotels: 45, attractions: 19, link: "/Gilgit_info" },
    { name: "Jhelum", image: "https://flypakistan.pk/assets/img/City/Jhelum.jpeg", hotels: 35, attractions: 10, link: "/Jhelum_info" },
    { name: "Hyderabad", image: "https://flypakistan.pk/assets/img/City/Hyderabad.jpg", hotels: 48, attractions: 14, link: "/Hyderabad_info" },
    { name: "Multan", image: "https://flypakistan.pk/assets/img/City/Multan.jpg", hotels: 52, attractions: 16, link: "/Multan_info" },
  ];

export default function CitiesPage() {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Explore Cities</h2>
      <div className="row g-4">
        {cities.map((city, index) => (
          <div key={index} className="col-md-3">
            <div className="card h-100">
              <img src={city.image} className="card-img-top" alt={city.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{city.name}</h5>
                <Link to={city.link} className="btn btn-success w-100">VIEW ALL</Link>
              </div>
              <div className="card-footer bg-light text-center py-2">
                <small className="me-3">🏨 Hotels: {city.hotels}</small>
                <small>⭐ Attractions: {city.attractions}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
