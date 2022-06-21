import react from 'react';
import { BsPlusLg } from 'react-icons/bs';
import buttonStyle from './button.module.css';



export default function ButtonCreateCompanies(){
    return (
        <div className={buttonStyle.btn}>
            <BsPlusLg color='#f8bd39'/>
        </div>
    )
}




