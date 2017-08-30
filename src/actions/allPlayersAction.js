import axios from 'axios';

export function allPlayers() {

    return function(dispatch){
        axios.get('http://draft-backend-env.ahpbzkqxts.us-east-2.elasticbeanstalk.com/all-players')
          .then(function(response){
            dispatch({type:"ALL_PLAYERS", payload:response.data})
          })
          .catch(function(err){
            dispatch({type:"ALL_PLAYERS_ERROR", payload:err})
          })
      }

 
}
