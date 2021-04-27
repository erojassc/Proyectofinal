import './Create.css'; 
import React from "react";
import * as MI_API from "./Api";
import {Formik, Field, Form} from "formik";

class Create extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    MI_API.getTodos().then((res) => {
      this.setState({ todos: res.data });
    });
  }

  crear(todo) {
    MI_API.saveTodo(todo).then((res) => {
      console.log(`Creado: ${todo}`);
      const newTodoList = this.state.todos;
      newTodoList.push(todo);
      this.setState({
        todos: newTodoList
      });
    });
  }

  render() { 
    return (
        <div >
      <h1>Mantenimiento de Contacto</h1>
      <Formik enableReinitialize
      initialValues={{ name: "", last: "", phone: "", email: "", picked: ""}}
      onSubmit={(values) => {
        console.log(values);
        alert("Se agrego contacto");
        this.crear({
          id: this.state.todos[this.state.todos.length-1].id + 1,
          name:values.name, 
          last:values.last,
          phone:values.phone,
          email:values.email,
          isActive:values.picked,
          timestamp:"2020-10-27 15:41:14"
        });    
        }}>
        <Form method= "post" className="form_contact" id="miForm">
          Nombre :
          <Field name="name" type="text" placeholder="Escriba el nombre" />
          <br></br>
          Apellido :
          <Field name="last" type="text" placeholder="Escriba el apellido" />
          <br></br>
          Telefono : 
          <Field name="phone" type="text" placeholder="Escriba el telefono" />
          <br></br>
          Correo :  
          <Field name="email" type="email" placeholder="Escriba el correo" />
          <br></br>
          Estado
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="1" />
              Activo
            </label>
            <label>
              <Field type="radio" name="picked" value="0" />
              Inactivo
            </label>
            </div>
          <button type="submit" id="btnSend">Guardar</button>
        </Form> 
      </Formik>
    </div>
    );
  }
};

export default Create;