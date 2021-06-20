function Input() {
  return (
    <div className="row" style={{width:"30%"}}>
      <input type="text" className="form-control col-8" />
      <button type="submit" className="btn btn-primary col-3" style={{marginLeft:"20px"}}>Add Task</button>
    </div>
  );
}

export default Input;
