import './Home.css';
import React from "react";
import * as MI_API from "./Api";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class Home extends React.Component {
  state = {
    todos: []
  };

  componentDidMount() {
    MI_API.getTodos().then((res) => {
      console.log("Obtuve los todos");
      this.setState({ todos: res.data });
    });
  }

  eliminar(id) {
    MI_API.deleteTodos(id).then((res) => {
      console.log(`Eliminado: ${id}`);
      this.setState({
        todos: this.state.todos.filter((todo) => todo.id !== id)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Aplicacion de lista de Contactos</h1>
        <ul className="card__list">
          {this.state.todos.map((x) => (
            <li className="card__item" key={x.id}>
              <Card>
                <CardContent className="Content">
                  <div className={x.isActive ? 'card__status card__status--active' : 'card__status card__status--inactive'}>
                  </div>
                  <Typography variant="h5" component="h2" > 
                    Nombre: {x.name} {x.last}
                  </Typography>
                  <Typography color="textSecondary">
                    Telefono: {x.phone}
                  </Typography>
                  <Typography variant="body2" component="p">
                    correo electronico: {x.email}
                  </Typography>
                </CardContent>
                <CardActions className="content_item">
                  <Button size="small" onClick={() => this.eliminar(x.id)}>
                    <DeleteForeverIcon style={{ fontSize:  60}} /> 
                  </Button>
                </CardActions>
              </Card>
            </li>
          ))}{" "}
        </ul>
      </div>
    );
  }
};

export default Home;