import { Component } from '@angular/core';
import {quizComponent} from '../../components/quiz/quiz.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [quizComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
