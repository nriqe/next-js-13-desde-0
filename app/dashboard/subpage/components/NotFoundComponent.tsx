import { notFound } from "next/navigation";

function NotFoundComponent() {
  notFound();
  return <div>Esto ni lo vas a ver</div>;
}

export default NotFoundComponent;
