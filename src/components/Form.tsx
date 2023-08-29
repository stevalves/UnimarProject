interface iFormProps {
  children: React.ReactNode;
  title?: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}

const Form = ({ children, title, onSubmit }: iFormProps) => {
  return (
    <form onSubmit={onSubmit} data-aos="fade-down" className="container max-w-[480px] mx-auto bg-white text-forest-900 my-auto flex flex-col items-center rounded gap-4 px-2 md:px-6 shadow-lg shadow-forest-500 py-6 md:py-12">
      <h3 className="font-semibold text-2xl text-center">{title}</h3>
      {children}
    </form>
  )
}

export default Form