export function increment(index){
    return {
        type : 'INCREMENT_LIKES',
        index
    }
}

export function addComment(postId , user , comment){
    return {
        type : 'ADD_COMMENT',
        postId ,
        user,
        comment
    }
}

export function deleteComment(postId , index){
    return {
        type : 'DELETE_COMMENT',
        postId ,
        index
    }
}