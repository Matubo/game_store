import err_img from 'src/assets/img/error_img/no_image_avaliable.jpg';

export const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.preventDefault();
  if ((e.target as HTMLImageElement).tagName == 'IMG') {
    (e.target as HTMLImageElement).src = err_img;
  }
};
