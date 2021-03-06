import {Component, OnInit} from '@angular/core';
import {Task} from './models/task';
import {StorageService} from './services/storage/storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private storage: StorageService) {}
    // -- Notre Tableau de Tâches.
  tasks: Task[] = [];

  /**
   * Cette fonction se déclenche dans l'application lorsqu'une nouvelle tâche est créée par l'utilisateur dans le composant app-add.
   * @param $event
   */
  newTask(newTaskEvent: any) {
    /**
     * On ajoute la nouvelle tâche dans le tableau de tâches. Puis on sauvargde dans le localstorage.
     */
    this.tasks.push(newTaskEvent.task);
    this.storage.save(this.tasks);
   // console.log(this.tasks);
  }

  ngOnInit(): void {
    /**
     * Au chargement de l'application,
     * je récupère mes tâches dans le localStorage.
     * @type {any | any[]}
     */
    this.tasks = this.storage.getTasks();

  }

  /**
   * l'Utilisateur viens de terminer une tâche.
   * @param {Task} task
   */
  taskIsDone(task: Task) {
    task.status = true;
    this.storage.save(this.tasks);
  }

  /**
   * l'utilisateur vient de supprimer une tâche on la retire du tableau et on sauvegarde tout !
   * @param {Task} task
   */
  removeTask(task: Task) {
    // -- Suppression de la tâche.
    _.pullAllWith(this.tasks, [task], _.isEqual);
    this.storage.save(this.tasks);
    // -- La sauvegarde des tâches.
  }
}
