import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';
import { Task } from 'src/types/Task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  data?: Task;

  constructor(
    private route: ActivatedRoute,
    private LocalStorageSVC: LocalStorageService,
    private router: Router,
    public _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // this.task$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     console.log(params.get("id"));
    //     return '';
    //   })
    // );
    /*No se utiliza este metodo, ya que no vamos a precisar volver a utilizar la misma instancia del componente. Es decir, no elimina el componente una vez salimos de la ruta, por lo que sigue en el "arbol". La segunda opcion es mejor, leer https://angular.io/guide/router-tutorial-toh */
    const id = this.route.snapshot.paramMap.get('id');

    this.data = this.LocalStorageSVC.getTaskById(Number(id));

    if (!this.data) {
      this.router.navigate(['/']);
      const msg: string = 'No se encontro la task con el id: ' + id;
      this._snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }
}
