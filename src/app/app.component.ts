import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonMathComponent } from './button-math/button-math.component';
import { InfoComponent } from "./info/info.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonMathComponent, InfoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  playSound() {
    const sound = new Audio('./../assets/click.mp3');
    sound.play();
  }
  display: string = ''; // Cadena que se mostrará en pantalla
  currentOperation: string = ''; // La operación matemática actual en forma de cadena
  title = 'Calculadora';
  placeholder = '';
  recibirLetra(char: string) {
    if (this.placeholder == 'Error') this.placeholder = '';
    // Si el char es un dígito o un punto decimal, lo añadimos al display
    if (!isNaN(Number(char)) || char === '.') {
      this.playSound();
      this.display += char;
    }
  }

  recibirOperacion(char: string) {
    if (this.display && ['+', '-', '*', '/'].includes(char)) {
      this.currentOperation += this.display + char;
      this.placeholder = this.currentOperation;
      this.display = '';
      this.playSound();
    }

    if (char === '=') {
      this.currentOperation += this.display;
      this.playSound();
      this.calcularResultado();
    }
  }
  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const key = event.key;

    // Números
    if (key >= '0' && key <= '9') {
      this.display += key;
      this.playSound();
    }

    // Operaciones
    if (key === '+') {
      this.currentOperation += this.display + '+';
      this.placeholder = '+';
      this.display = '';
      this.playSound();
    }
    if (key === '-') {
      this.currentOperation += this.display + '-';
      this.placeholder = '-';
      this.display = '';
      this.playSound();
    }
    if (key === '*') {
      this.currentOperation += this.display + '*';
      this.placeholder = '*';
      this.display = '';
      this.playSound();
    }
    if (key === '/') {
      this.currentOperation += this.display + '/';
      this.placeholder = '/';
      this.display = '';
      this.playSound();
    }

    // Punto decimal
    if (key === '.') {
      if (!this.display.includes('.')) {
        this.display += '.';
        this.playSound();
      }
    }

    // Igual para calcular el resultado
    if (key === '=') {
      this.currentOperation += this.display;
      this.calcularResultado();
      this.playSound();
    }
    if (key === 'Enter') {
      this.currentOperation += this.display;
      this.calcularResultado();
      this.playSound();
    }
    if (key === 'Backspace') {
      this.display = this.display.slice(0, -1);
      this.playSound();
    }
    // Clear (C) para reiniciar la calculadora
    if (key === 'c' || key === 'C') {
      this.clearDisplay();
      this.playSound();
    }
  }

  calcularResultado() {
    try {
      const resultado = eval(this.currentOperation);
      this.display = resultado.toString();
      this.currentOperation = '';
    } catch (error) {
      this.display = 'Error';
      this.currentOperation = '';
    }
  }

  clearDisplay() {
    this.display = '';
    this.currentOperation = '';
    this.placeholder = '';
  }
}
