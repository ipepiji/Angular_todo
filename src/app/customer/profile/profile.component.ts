import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editProfile(): void {
    Swal.fire({
      title: 'Update Profile',
      html: `
      <br>
      <div class="form-group">
          <label for="email" class="sr-only">Email</label>
          <input type="email" name="email" id="email" class="form-control" value="irfanhafizhi1995@gmail.com">
      </div>
      <div class="form-group">
          <label for="username" class="sr-only">Username</label>
          <input type="text" name="username" id="username" class="form-control" value="hafizhi95">
      </div>
      <div class="form-group mb-4">
          <label for="password" class="sr-only">Password</label>
          <input type="password" name="password" id="password" class="form-control" value="***********">
      </div>
      <div class="form-group mb-4">
          <label for="confirm_password" class="sr-only">Confirm Password</label>
          <input type="password" name="confirm_password" id="confirm_password" class="form-control" placeholder="***********">
      </div>`,
      showCancelButton: true,
      confirmButtonText: 'Update',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return new Promise((resolve, reject) => {
          // get your inputs using their placeholder or maybe add IDs to them
          resolve({
            email: $('input[name="email"]').val(),
            username: $('input[name="username"]').val(),
            password: $('input[name="password"]').val(),
            confirm_password: $('input[name="confirm_password"]').val()
          });
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`api-backend`)
          .then(response => {
            if (!response) {
              throw new Error(response.statusText)
            }
            Swal.fire(
              'Success!',
              'You update your profile',
              'success'
            )
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!'
            })
          })
      }
    })
  }

}
