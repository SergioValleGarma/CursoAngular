import { Component } from "@angular/core";
import { UserList } from "./users/user-list/user-list";
import { UserForm } from "./users/user-form/user-form";
import { IUser } from "./users/interfaces/user";

@Component({
  selector: "app-home",
  templateUrl: "./home.html",
  styleUrls: ["./home.scss"],
  imports: [UserList, UserForm]

})
export class Home {
 usersActive: IUser[] = [
    { name: "John", lastname: "Doe", email: "john.doe@email.com", age: 30, gender: 'male' },
    { name: "Jane", lastname: "Smith", email: "jane.smith@email.com", age: 25, gender: 'female' },
    { name: "Bob", lastname: "Johnson", email: "bob.johnson@email.com", age: 40, gender: 'male' },
    { name: "Alice", lastname: "Williams", email: "alice.williams@email.com", age: 35, gender: 'female' },
    { name: "Charlie", lastname: "Sugar", email: "charlie.sugar@email.com", age: 28, gender: 'male' },
    { name: "Emily", lastname: "Davis", email: "emily.davis@email.com", age: 32, gender: 'female' },
    { name: "David", lastname: "Miller", email: "david.miller@email.com", age: 45, gender: 'male' }
  ];

  delete(index: number) {
    const existingUser = this.usersActive[index]; 

    if (!existingUser) {
      alert("Usuario no encontrado.");
      return;
    }


    if (confirm(`¿Estás seguro de que deseas eliminar este usuario?\n\nNombre: ${existingUser.name} ${existingUser.lastname}\nCorreo: ${existingUser.email}`)) {
      this.usersActive.splice(index, 1);
    }

  }

}