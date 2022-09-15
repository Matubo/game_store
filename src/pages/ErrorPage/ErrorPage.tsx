import error_obi from 'src/assets/img/error_page/error-obi.png';
import './ErrorPage.scss';
export default function ErrorPage() {
  return (
    <div className="error-page">
      <img src={error_obi} className="error-page__img"></img>
      <p className="error-page__text">
        404 <br />
        This is not <br /> the page you&apos;re <br /> looking for
      </p>
    </div>
  );
}
