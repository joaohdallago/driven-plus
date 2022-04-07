import { FaMoneyBillWave } from 'react-icons/fa';

export default function Price({ price }) {
    return (
        <div>
            <header>
                <FaMoneyBillWave fontSize='18px' color='#FF4791'/>
                <span> Preço:</span>
            </header>
            <ul>
                <li>R$ 39,99 cobrados mensalmente</li>
            </ul>
        </div>
        
    )
}