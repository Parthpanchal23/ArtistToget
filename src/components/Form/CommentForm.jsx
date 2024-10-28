import React from 'react'

const CommentForm = () => {
  return (<div>
      <div className="col-xl-12">
        <h3 className="margin-top-35 margin-bottom-30">Add Comment</h3>
        <form method="post" id="add-comment">
          <div className="row">
            <div className="col-xl-6">
                <div className="input-with-icon-left no-border">
                    <i className="icon-material-outline-account-circle"></i>
                    <input type="text" className="input-text" name="commentname" id="namecomment" placeholder="Name" required/>
                </div>
            </div>
            <div className="col-xl-6">
                <div className="input-with-icon-left no-border">
                    <i className="icon-material-baseline-mail-outline"></i>
                    <input type="text" className="input-text" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
                </div>
            </div>
          </div>
          <textarea  name="comment-content" cols="30" rows="5" placeholder="Comment"></textarea>
        </form>
        <button className="button button-sliding-icon ripple-effect margin-bottom-40" type="submit" form="add-comment">
          Add Comment <i className="icon-material-outline-arrow-right-alt"></i>
        </button>
      </div>
    </div>)
}

export default CommentForm;