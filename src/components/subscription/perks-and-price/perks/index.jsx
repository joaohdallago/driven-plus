import styled from 'styled-components';
import { HiOutlineClipboardList } from 'react-icons/hi'

import Perk from './perk'

export default function Perks({ perksList }) {
    return (
        <div>
            <header>
                <HiOutlineClipboardList fontSize='18px' color='#FF4791'/>
                <span> Benefícios:</span>
            </header>
            <ul>
                {perksList.map(perkData => <Perk {...perkData}/>)}
            </ul>
        </div>
    )
}
