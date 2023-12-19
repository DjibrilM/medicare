
import { Link } from 'react-router-dom';

const Button = (props:{title:string ,logo:any ,link:string}) => {
  return (
    <div>
        <div className="flex flex-wrap gap-5 xl:gap-7.5">
    <Link
      to={props.link}
      className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      <span>
        {props.logo}
      </span>
      {props.title}
    </Link>
    </div>
    </div>
  )
}

export default Button