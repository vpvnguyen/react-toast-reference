import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function IndefiniteToast() {
  const notify = () => toast("Wow so easy!");

  return (
    <div className="container">
      <h1>Indefinite Toast</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default IndefiniteToast;
