import { toast } from "react-toastify";

export const useDefaultToastEmitter = () => {
  return toast("🦄 useDefaultToastEmitter!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default function DefaultToastEmitter() {
  return (
    <div className="container">
      <h1>DefaultToastEmitter</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          toast("🦄 DefaultToastEmitter!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }}
      >
        Notify!
      </button>
    </div>
  );
}
