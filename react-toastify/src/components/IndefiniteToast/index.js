import { toast } from "react-toastify";

export default function IndefiniteToast() {
  return (
    <div className="container">
      <h1>IndefiniteToast</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          toast("🦄 IndefiniteToast!", {
            position: "top-right",
            autoClose: false,
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
