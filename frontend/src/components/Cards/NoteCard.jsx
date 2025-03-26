import moment from 'moment';
import React from 'react';
import {MdOutlinePushPin} from 'react-icons/md';
import { MdCreate,MdDelete } from 'react-icons/md';
import '../../App.css';

const NoteCard = ({title,date,content,tags,isPinned,onEdit,onDelete,onPinNote,}) => {
  return (
    <div className="note-card">
  <div className="note-header">
    <div className="note-title">
      <h6>{title}</h6>
      <span>{moment(date).format("Do MMM YYYY")}</span>
    </div>
    <MdOutlinePushPin
      className={`icon-btn ${isPinned ? "pinned" : ""}`}
      onClick={onPinNote}
    />
  </div>

  <p className="note-content">{content?.slice(0, 60)}</p>

  <div className="note-footer">
    <div className="note-tags">{tags.map((item) => `#${item}`)}</div>
    <div className="note-actions">
      <MdCreate className="edit-btn" onClick={onEdit} />
      <MdDelete className="delete-btn" onClick={onDelete} />
    </div>
  </div>
</div>

  )
}

export default NoteCard