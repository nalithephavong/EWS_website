type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  return (
    <div 
      className="inline-block rounded-md text-center text-lg font-semibold py-2 px-4 font-extrabold text-xl py-4 px-6 text-white bg-primary-500 hover:bg-primary-600" 
    >
      {props.children}
    </div>
  );
};

export { Button };