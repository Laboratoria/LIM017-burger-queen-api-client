import style from './VerticalBar.module.css'
function VerticalBar(){
    return(
        <ul className={style.VerticalBar}>
            <li className={style.VerticalBar__li}>All Orders</li>
            <li className={style.VerticalBar__li}>Pending</li>
            <li className={style.VerticalBar__li}>Delivering</li>
            <li className={style.VerticalBar__li}>Delivered</li>
            <li className={style.VerticalBar__li}>Canceled</li>
        </ul>
    )
};

export default VerticalBar;