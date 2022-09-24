import './PlatformSupport.scss';

interface IProps {
  flag: boolean;
}

export default function PlatformSupport({ flag }: IProps) {
  return flag ? (
    <span className="genre__platform genre__platform-true">&#10003;</span>
  ) : (
    <span className="genre__platform genre__platform-false">&#10007;</span>
  );
}
