import gql from 'graphql-tag';

export const MissionsInfo = gql`
query MissionsInfo{
    launches {
      mission_name
      mission_id
      launch_success
      launch_year
    }
  }
` 