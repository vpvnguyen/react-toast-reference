import { toast } from "react-toastify";

export const useDefaultToastEmitter = () => {
  return toast("🦄 Wow so easy!", {
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
          toast("🦄 Wow so easy!", {
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
