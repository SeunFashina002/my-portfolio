import Swal from "sweetalert2";

const successAlert = () => {
  Swal.fire({
    title: "Message successfully sent",
    text: "Click Ok to exit",
    icon: "success",
  });
};

export default successAlert