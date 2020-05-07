/**
 * Contains the skill description
 */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const levels = [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1]
];

const SkillBox = (props) => {
    return (
        <div className="skill column center evenly-distributed">
            <div className="skill__icon">
                <FontAwesomeIcon icon={props.icon} size="8x" />
            </div>
            <div className="skill__level row evenly-distributed">
                { levels[props.level - 1].map((isOn, idx) => {
                    if (isOn === 1) {
                        return <div className="level__circle level__circle--on" key={idx}></div>;
                    }
                    return <div className="level__circle" key={idx}></div>
                }) }
            </div>
        </div>
    )
}

export default SkillBox
