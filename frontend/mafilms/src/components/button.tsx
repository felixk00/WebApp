type ButtonProps = {
  href?: string;
};

const Button = ({ href = '' }: ButtonProps) => {
  return (
    <a
      className='pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4'
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      Contact
    </a>
  );
};

export default Button;
