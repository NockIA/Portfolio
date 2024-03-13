import '../../../../styles/global.css';
import './burger.css';

interface BurgerProps {
    isOpened : Function
}

export const Burger:React.FC<BurgerProps> = ({isOpened}) => {
    return (
        <div onClick={()=>isOpened(true)} className='column-container burger-container'>
            <span/>
            <span/>
            <span/>
        </div>
    )
}