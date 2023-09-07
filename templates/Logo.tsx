type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg viewBox="0 0 24 24"
        className="stroke-current text-primary-500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        stroke="#6eb6ec"
        strokeWidth="1.5"
        width={size}
        height={size}
        >
        <path d="M12 17V21M8 21H16M6.2 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V13.8C3 14.9201 3 15.4802 3.21799 15.908C3.40973 16.2843 3.71569 16.5903 4.09202 16.782C4.51984 17 5.07989 17 6.2 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    </span>
  );
};

export { Logo };