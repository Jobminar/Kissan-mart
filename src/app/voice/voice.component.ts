import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DataTransferService } from '../data-transfer.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css'],
})
export class VoiceComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  goToPreviousPage(): void {
    this.location.back();
  }
  
  mediaRecorder: any;
  chunks: Blob[] = [];
  recordingStarted = false;
  status = '';
  count:number=2;
  constructor(private http: HttpClient,
    private dataShred:DataTransferService,
    private location:Location) {}

  record() {
    if (this.count%2==0) {
      this.startRecording();
      this.count++
      console.log(this.count)
      return
    } else {
     
      this.stopRecording();
      this.count++
      console.log(this.count)
      return
    }
  }

  // toggleRecording() {
  //   if (this.count%2==0) {
  //     this.startRecording();
  //     this.count++
      
  //   } else {
     
  //     this.stopRecording();
  //     this.count++
  //   }
  // }
  userId=this.dataShred.userId
  async startRecording() {
 
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (e: any) => {
        if (e.data instanceof Blob) {
          this.chunks.push(e.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'audio/wav' });
        this.audioPlayer.nativeElement.src = URL.createObjectURL(blob);

        // Send the voice recording to the backend
        this.uploadVoiceRecording(blob,this.userId);
        this.chunks = [];
      };

      this.mediaRecorder.start();
      this.status = 'Recording...';
      this.recordingStarted = true;
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  }

  stopRecording() {
    if (this.mediaRecorder) {
      this.mediaRecorder.stop();
      this.status = 'Recording stopped';
      this.recordingStarted = false;
    }
  }
   
  uploadVoiceRecording(blob: Blob,userId:any) {
    const apiUrl='https://kisanmart.onrender.com/uploadaudio';
    // const userId=this.dataShred.userId
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('audioData', blob);
  
    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        console.log('Voice recording uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading voice recording:', error);
      }
    );
  }
}
