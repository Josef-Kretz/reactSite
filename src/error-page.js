import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() || {status : 404, statusText:'Page not found'};
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.status}</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}