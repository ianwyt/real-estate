import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements AfterViewInit {
  @ViewChild('draggable', { static: false }) draggable!: ElementRef;
  @ViewChild('dropzone', { static: false }) dropzone!: ElementRef;
  @ViewChild('progressLine', { static: false }) progressLine!: ElementRef;
  @ViewChild('status', { static: false }) status!: ElementRef;
  @ViewChild('counter', { static: false }) counter!: ElementRef;
  @ViewChild('imgPrev', { static: false }) imgPrev!: ElementRef;
  @ViewChild('imgPreviewArea', { static: false }) imgPreviewArea!: ElementRef;
  @ViewChild('saveBtn', { static: false }) saveBtn!: ElementRef;

  widthCount: number = 0;
  timeout: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.initDragAndDrop();
  }

  @HostListener('document:dragover', ['$event']) onDragOver(event: any) {
    event.preventDefault();
  }

  @HostListener('document:drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    this.draggable.nativeElement.style.display = 'none';
    this.timeout = setTimeout(() => { this.updateProgress() }, 200);
  }

  initDragAndDrop() {
    let draggableElement = this.draggable.nativeElement;
    draggableElement.setAttribute('draggable', 'true');
    draggableElement.addEventListener('dragstart', (event: any) => {
      event.dataTransfer.setData('text', '');
    });
  }

  updateProgress(): void {
    this.widthCount += 10;
    this.progressLine.nativeElement.style.width = this.widthCount + '%';
    if(this.widthCount < 100){
      this.timeout = setTimeout(() => { this.updateProgress() }, 200);
      this.status.nativeElement.textContent = 'Uploading...';
      this.counter.nativeElement.textContent = this.widthCount + 'Kb';
    } else { 
      this.status.nativeElement.textContent = 'Done';
      clearTimeout(this.timeout);
      this.dropzone.nativeElement.style.display = 'none';
      this.imgPreviewArea.nativeElement.style.display = 'block';
      this.saveBtn.nativeElement.style.display = 'block';
    }
  }
}