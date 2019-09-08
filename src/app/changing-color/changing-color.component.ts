import { Component, OnInit, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'changing-color',
  templateUrl: './changing-color.component.html',
  styleUrls: ['./changing-color.component.css']
})
export class ChangingColorComponent implements AfterViewInit {
  
  zeros: string = '';
  @ViewChild("container") container: ElementRef;
  @ViewChild("myDiv") divView: ElementRef;

  ngAfterViewInit(){
    this.divView.nativeElement.innerHTML = 'Hello to Angular 8';
    this.divView.nativeElement.style.backgroundColor = 'green';
    console.log(this.divView.nativeElement.style);

  }

  changeColor() {
      var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
      var colorLength = color.length;
      if (colorLength < 7) {
        color += this.zeros.substring(0, this.zeros.length - colorLength);
      }
      // Setting the container elements background color to 
      // the new randomly generated value.
      this.container.nativeElement.style.backgroundColor = color;
  }
  }

