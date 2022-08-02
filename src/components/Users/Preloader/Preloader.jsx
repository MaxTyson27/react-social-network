import classNames from "../Users.module.sass";
import preloaderSVG from '../../../assets/images/preloader.svg'

const Preloader = (props) => {
  return (
    <div className={classNames.preloader}>
      <img className={classNames.preloader_icon} src={preloaderSVG} alt="preloader image" />
    </div>
  )
}


export default Preloader
