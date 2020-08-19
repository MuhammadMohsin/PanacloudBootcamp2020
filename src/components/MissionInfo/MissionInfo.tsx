import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'

interface Props {
    data: LaunchMissionInfoQuery
}
const MissionInfo: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <h3>Mission Details</h3>
            {JSON.stringify(data)};
        </div>
    )
}

export default MissionInfo