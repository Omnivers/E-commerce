import img from "../img/Vector.png";
import img2 from "../img/image2.svg";

const Shipment = () => {
  return (
    <div class="flex flex-direction: row; bg-100">
      <div>
        <h1>Free shipping </h1>
        <img src={img} />
      </div>
      <div>
        <img src={img2} />
      </div>
    </div>
  );
};

export default Shipment;
