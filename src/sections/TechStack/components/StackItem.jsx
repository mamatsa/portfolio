const StackItem = ({ title, logo, link }) => {
  return (
    <a href={link} target='_blank'>
      <img src={logo} alt={title} className='w-16 xl:w-24 2xl:w-32' />
    </a>
  );
};

export default StackItem;
