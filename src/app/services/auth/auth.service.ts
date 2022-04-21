import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apollo: Apollo) { }

  registerUser(user:any){
    const CREATE_USER = gql`
        mutation{
          createUser(email:"${user.email}",username:"${user.username}",password:"${user.password}"){
            user{
              id,
              email,
              username
            }
          }
        }
        `;
        console.log(CREATE_USER);
        
        this.apollo.mutate({
          mutation: CREATE_USER,
        }).subscribe(({ data }) => {
          console.log('got data', data);
          alert('Successfully Registered')
        },(error) => {
          console.log('there was an error sending the query', error);
        });
        

  }
  authenticateUser(user:any){
    const CREATE_USER = gql`
    mutation{
         tokenAuth(username:"${user.username}",password:"${user.password}"){
          token
        }
       }
        `;
        console.log(CREATE_USER);
        
        this.apollo.mutate({
          mutation: CREATE_USER,
        }).subscribe(({ data }) => {
          console.log('got data', data);
          alert('Successfully Registered')
        },(error) => {
          console.log('there was an error sending the query', error);
        });
        

  }
}
