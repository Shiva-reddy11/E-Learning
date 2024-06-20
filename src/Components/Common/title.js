

const Title = ({ subtitle, title }) => {
    return (
      <>
        <div className="text-center p-10">
          <p className="text-3xl text-secondary font-normal ">{subtitle} </p>
          <p className="text-5xl font-normal p-5">{title} </p>
        </div>
      </>
    )
  }
  
  export default Title