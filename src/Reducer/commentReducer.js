function postcomments(state = [] , action)
{
    switch(action.type)
        {
            case 'ADD_COMMENT':
                return [ ...state,{
                user : action.user,
                comment :action.comment
                }]
            default :
                return state
        }
    return state
}


function comments(state = {} , action)
{
   if(typeof(action.postId) !== 'undefined')
       {    
        switch(action.type)
            {
                case 'ADD_COMMENT':
                    return Object.assign({}, state,
                        {[action.postId] : postcomments(state[action.postId],action)}
                                  )
                default :
                    return state
            }
       }
    return state
}

export default comments