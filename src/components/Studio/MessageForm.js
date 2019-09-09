import React from 'react';

const MessageForm = ({ onSubmit, onCancel, onChange, value }) => {
    return <form className="create-reivew-form" onSubmit={onSubmit}  >

        <h3 className="text-center">New Message</h3>

        <div className="input-group">
            <label htmlFor="content"></label>
            <textarea className="form-content" name="content" id="content" type="content" placeholder="Please write your message here..." onChange={onChange} value={value}></textarea>
        </div>

        <div className="form-footer">
            <button className="form-btn" type="submit">Submit</button>
            <button className="form-btn" type="button" onClick={onCancel}>Cancel</button>
        </div>

    </form>
}

export default MessageForm