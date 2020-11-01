import React,{ Component } from 'react'
import CommentList from './component/CommentList'
import CommentBox from './component/CommentBox'

/**
 * 留言本
 * 状态提升（lifting state up）
 * 自上而下的数据流（top-dowm data flow）
 * 和双向绑定的区别
 */

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comments: [ 'this is my first reply' ]
        }
        this.addComment = this.addComment.bind(this)
    }
    addComment(comment){
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    render(){
        const { comments } = this.state
        return(
            <div>
                <CommentList comments={comments} />
                <CommentBox 
                commentsLength={comments.length}
                onAddComment={this.addComment}
                />
            </div>
        )
    }
}
export default Main