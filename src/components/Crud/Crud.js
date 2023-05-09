import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Crud = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const getData = async() => {
    let res =  await axios.get("http://localhost:3031/students/").then((response) => {
      // console.log(response.data)
      setStudents(response.data);
    });
  };

  const onSubmit = (data) => {
    if(isEdit){
      let updateStudent = axios.put(`http://localhost:3031/students/${data.id}`,data).then(()=>{
        getData()
        reset()
        setIsEdit(false)
      })
    }
    else{

      let postData = axios
        .post("http://localhost:3031/students/", data)
        .then(() => {
          getData();
          reset();
        });
      // console.log(data);
    }
  };

  const deleteStudent = (stdent) => {
    
    let deleteStudent = axios
      .delete("http://localhost:3031/students/" + stdent.id)
      .then(() => {
        getData();
      });
  };

  const editStudent = (std) => {
    let editStudent = axios
      .get(`http://localhost:3031/students/${std.id}`)
      .then(() => {
        const fields = ["id", "name", "branch", "college"];
        fields.forEach((field) => setValue(field, std[field]));
      });
      setIsEdit(true)
  };
  

 
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="my-3 ">
        <h3 className="text-center my-3 py-3 text-decoration-underline headingColor ">CRUD Operations using Api and useForm Hook in ReactJS</h3>
      </div>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-4">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Id
                </label>
                <input
                  type="text"
                  className="form-control input1"
                  id="exampleFormControlInput1"
                  placeholder="id"
                  name="id"
                  {...register("id")}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control input1"
                  id="exampleFormControlInput2"
                  placeholder="Name"
                  name="name"
                  {...register("name")}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Branch
                </label>
                <input
                  type="text"
                  className="form-control input1"
                  id="exampleFormControlInput3"
                  placeholder="Branch"
                  name="branch"
                  {...register("branch")}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput4"
                  className="form-label"
                >
                  College
                </label>
                <input
                  type="text"
                  className="form-control input1"
                  id="exampleFormControlInput4"
                  placeholder="College"
                  name="college"
                  {...register("college")}
                />
              </div>
              <div className="">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                >
                 {isEdit ? "update Student" : "Add Student"}
                </button>
                
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-dark table-striped ">
              <thead>
                <tr>
                  <th>Id </th>
                  <th>Name</th>
                  <th>Branch</th>
                  <th>college</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => (
                  <tr key={i}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.branch}</td>
                    <td>{student.college}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => editStudent(student)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteStudent(student)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crud;
