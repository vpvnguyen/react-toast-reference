import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DefaultToast() {
  const notify = () => toast("DefaultToast!");

  return (
    <div className="container">
      <h1>Default Toast</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      {/* <ToastContainer /> */}
    </div>
  );
}

export default DefaultToast;
