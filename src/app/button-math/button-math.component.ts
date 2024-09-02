import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-math',
  standalone: true,
  imports: [],
  templateUrl: './button-math.component.html',
  styleUrl: './button-math.component.css',
})
export class ButtonMathComponent implements OnInit {
  char = '';

  @Input() charAdd!: string;
  @Output() AddKeyDisplay = new EventEmitter();

  enviarLetra() {
    this.AddKeyDisplay.emit(this.char);
  }

  ngOnInit(): void {
    this.char = this.charAdd;
  }
}
