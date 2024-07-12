import { Alert, AlertTitle } from "@/components/ui/alert";

export default function AlertaCarrito() {
  return (
    <Alert
      variant="carritoNot"
      className="fixed bg-white right-4 bottom-5 z-20 shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#28B463"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-check-big"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
      </svg>
      <AlertTitle className="mt-1 ml-2 font-normal">
        Se añadio tu producto al carrito
      </AlertTitle>
    </Alert>
  );
}
