import './App.scss';
import { Component } from 'react';
import Form from '../Form/Form'; // Import du composant Form
import Counter from '../Counter/Counter'; // Import du composant Counter
import TaskList from '../TaskList/TaskList'; // Import du composant TaskList
import tasksData from '../../data/tasks'; // Import des données de tasks.js

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasksData,
      newTask: '',
    };
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleTaskChange = (taskId) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, done: !task.done };
        }
        return task;
      });
      return { tasks: updatedTasks };
    });
  };

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le rechargement de la page
    this.addTask(); // Appel de la méthode pour ajouter la nouvelle tâche
  };

  addTask = () => {
    this.setState((prevState) => {
      const newTask = {
        id: Date.now(), // Générer un identifiant unique
        label: prevState.newTask,
        done: false,
      };
      return {
        tasks: [...prevState.tasks, newTask],
        newTask: '', // Réinitialiser la valeur de l'input
      };
    });
  };

  render() {
    const { tasks, newTask } = this.state;
    const incompleteTasks = tasks.filter((task) => !task.done); // Tâches non effectuées

    // Tri des tâches non effectuées en premier
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.done && !b.done) return 1;
      if (!a.done && b.done) return -1;
      return 0;
    });

    return (
      <div className="app">
        <Form
          inputValue={newTask}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
        <Counter incompleteTaskCount={incompleteTasks.length} />
        <TaskList tasks={sortedTasks} onTaskChange={this.handleTaskChange} />
      </div>
    );
  }
}

export default App;
