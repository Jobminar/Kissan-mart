// import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { DataTransferService } from '../data-transfer.service';
// import { Location } from '@angular/common';
// @Component({
//   selector: 'app-voice',
//   templateUrl: './voice.component.html',
//   styleUrls: ['./voice.component.css'],
// })
// export class VoiceComponent {
//   @ViewChild('audioPlayer') audioPlayer!: ElementRef;
//   goToPreviousPage(): void {
//     this.location.back();
//   }
  
//   mediaRecorder: any;
//   chunks: Blob[] = [];
//   recordingStarted = false;
//   status = '';
//   count:number=2;
//   constructor(private http: HttpClient,
//     private dataShred:DataTransferService,
//     private location:Location) {}

//   record() {
//     if (this.count%2==0) {
//       this.startRecording();
//       this.count++
//       console.log(this.count)
//       return
//     } else {
     
//       this.stopRecording();
//       this.count++
//       console.log(this.count)
//       return
//     }
//   }

//   // toggleRecording() {
//   //   if (this.count%2==0) {
//   //     this.startRecording();
//   //     this.count++
      
//   //   } else {
     
//   //     this.stopRecording();
//   //     this.count++
//   //   }
//   // }
//   userId=this.dataShred.userId
//   async startRecording() {
 
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       this.mediaRecorder = new MediaRecorder(stream);

//       this.mediaRecorder.ondataavailable = (e: any) => {
//         if (e.data instanceof Blob) {
//           this.chunks.push(e.data);
//         }
//       };

//       this.mediaRecorder.onstop = () => {
//         const blob = new Blob(this.chunks, { type: 'audio/wav' });
//         this.audioPlayer.nativeElement.src = URL.createObjectURL(blob);

//         // Send the voice recording to the backend
//         this.uploadVoiceRecording(blob,this.userId);
//         this.chunks = [];
//       };

//       this.mediaRecorder.start();
//       this.status = 'Recording...';
//       this.recordingStarted = true;
//     } catch (error) {
//       console.error('Error accessing microphone:', error);
//     }
//   }

//   stopRecording() {
//     if (this.mediaRecorder) {
//       this.mediaRecorder.stop();
//       this.status = 'Recording stopped';
//       this.recordingStarted = false;
//     }
//   }
   
//   // uploadVoiceRecording(blob: Blob,userId:any) {
//   //   const apiUrl='https://kisanmart.onrender.com/saveAudioData';
//   //   // const userId=this.dataShred.userId
//   //   const formData = new FormData();
//   //   formData.append('userId', userId);
//   //   formData.append('audioData', blob);
  
//   //   this.http.post(apiUrl, formData).subscribe(
//   //     (response) => {
//   //       console.log('Voice recording uploaded successfully:', response);
//   //     },
//   //     (error) => {
//   //       console.error('Error uploading voice recording:', error);
//   //     }
//   //   );
//   // }
//   uploadVoiceRecording(blob: Blob,userId:any) {
//     const apiUrl='https://kisanmart.onrender.com/saveAudioData';
//     // const userId=this.dataShred.userId
//     const formData = {
//       userId: userId,
//       audioData:blob
//     }
//     // formData.append('userId', userId);
//     // formData.append('audioData', blob);
//     console.log(userId,"audio",blob)
//     console.log("form",formData)
//     this.http.post(apiUrl, formData).subscribe(
//       (response) => {
//         console.log('Voice recording uploaded successfully:', response);
//       },
//       (error) => {
//         console.error('Error uploading voice recording:', error);
//       }
//     );
//   }
// }

// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { DataTransferService } from '../data-transfer.service';
// import { Location } from '@angular/common';

// @Component({
//   selector: 'app-voice',
//   templateUrl: './voice.component.html',
//   styleUrls: ['./voice.component.css'],
// })
// export class VoiceComponent {
//   @ViewChild('audioPlayer') audioPlayer!: ElementRef;
//   goToPreviousPage(): void {
//         this.location.back();
//        }
//   mediaRecorder: any;
//   chunks: Blob[] = [];
//   recordings: string[] = []; // Array to store recorded audio URLs
//   recordingStarted = false;
//   status = '';
//   count: number = 2;

//   constructor(
//     private http: HttpClient,
//     private dataShred: DataTransferService,
//     private location: Location
//   ) {}

//   record() {
//     if (this.count % 2 === 0) {
//       this.startRecording();
//       this.count++;
//       console.log(this.count);
//       return;
//     } else {
//       this.stopRecording();
//       this.count++;
//       console.log(this.count);
//       return;
//     }
//   }

//   userId = this.dataShred.userId;

//   async startRecording() {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       this.mediaRecorder = new MediaRecorder(stream);

//       this.mediaRecorder.ondataavailable = (e: any) => {
//         if (e.data instanceof Blob) {
//           this.chunks.push(e.data);
//         }
//       };

//       this.mediaRecorder.onstop = () => {
//         const blob = new Blob(this.chunks, { type: 'audio/wav' });
//         this.audioPlayer.nativeElement.src = URL.createObjectURL(blob);

//         // Add the new recording to the array
//         this.recordings.push(this.audioPlayer.nativeElement.src);

//         // Send the voice recording to the backend
//         this.uploadVoiceRecording(blob, this.userId);
//         this.chunks = [];
//       };

//       this.mediaRecorder.start();
//       this.status = 'Recording...';
//       this.recordingStarted = true;
//     } catch (error) {
//       console.error('Error accessing microphone:', error);
//     }
//   }

//   stopRecording() {
//     if (this.mediaRecorder) {
//       this.mediaRecorder.stop();
//       this.status = 'Recording stopped';
//       this.recordingStarted = false;
//     }
//   }

//   uploadVoiceRecording(blob: Blob, userId: any) {
//     const apiUrl = 'https://kisanmart.onrender.com/saveAudioData';

//     const formData = {
//       userId: userId,
//       audioData: blob,
//     };

//     this.http.post(apiUrl, formData).subscribe(
//       (response) => {
//         console.log('Voice recording uploaded successfully:', response);
//       },
//       (error) => {
//         console.error('Error uploading voice recording:', error);
//       }
//     );
//   }
// }

 import { Component, ElementRef, ViewChild ,OnInit} from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { DataTransferService } from '../data-transfer.service';
 import { Location } from '@angular/common';
 @Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css'],
})
export class VoiceComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  goToPreviousPage(): void {
             this.location.back();
            }
  mediaRecorder: any;
  chunks: Blob[] = [];
  recordings: string[] = [];
  recordingStarted = false;
  status = '';
  count: number = 2;
  audioList: any[] = [];

  ngOnInit(): void {
    this.userId = this.dataShred.userId;
    // if (this.userId !== null) {
    //   this.pollForResponses();
     
    // }
  }
  constructor(
    private http: HttpClient,
    private dataShred: DataTransferService,
    private location: Location
  ) {
   
    
  }

  record() {
    if (this.count % 2 === 0) {
      this.startRecording();
    } else {
      this.stopRecording();
    }
    this.count++;
  }

  userId:string | null = this.dataShred.userId;

  async startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);

      this.mediaRecorder.ondataavailable = (e: any) => {
        if (e.data instanceof Blob) {
          this.chunks.push(e.data);
        }
      };

      // this.mediaRecorder.onstop = () => {
      //   const blob = new Blob(this.chunks, { type: 'audio/wav' });

      //   // Convert Blob to base64
      //   this.blobToBase64(blob, (base64Data) => {
      //     // Add the new recording to the array
      //     this.recordings.push(base64Data);

      //     const audioForDuration = new Audio();
      //     audioForDuration.src = URL.createObjectURL(blob);
      //     const audioDuration = audioForDuration.duration;
      //     // Send the voice recording to the backend
      //       console.log("duration",audioDuration)
      //     if(audioDuration>0.5){
      //       console.log("inside the if")
      //       this.uploadVoiceRecording(base64Data, this.userId);
      //       this.chunks = [];
      //     }
          
          
      //   });
      // };

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'audio/wav' });
      
        // Create an audio element to check the duration
        const audioForDuration = new Audio();
        audioForDuration.src = URL.createObjectURL(blob);
      
        // Check the duration when the metadata is loaded
        audioForDuration.addEventListener('loadedmetadata', () => {
          const audioDuration = audioForDuration.duration;
      
          // Check if the audio duration is more than 0.5 seconds
          if (audioDuration > 1) {
            // Convert Blob to base64
            this.blobToBase64(blob, (base64Data) => {
              // Add the new recording to the array
              this.recordings.push(base64Data);
      
              // Send the voice recording to the backend
              this.uploadVoiceRecording(base64Data, this.userId);
              this.chunks = [];
            });
          } else {
            console.log('Recording is less than 0.5 seconds, ignoring...');
            this.chunks = []; // Clear chunks array if the recording is less than 0.5 seconds
          }
        });
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

  uploadVoiceRecording(base64Data: string, userId: any) {
    const apiUrl = 'https://kisanmart.onrender.com/upload-audio';

    const formData = {
      userId: userId,
      audioData: base64Data,
    };

    this.http.post(apiUrl, formData).subscribe(
      (response) => {
        console.log('Voice recording uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading voice recording:', error);
      }
    );
    if (this.userId !== null) {
      this.pollForResponses();
     
    }
  }

  // Helper function to convert Blob to base64
  blobToBase64(blob: Blob, callback: (result: string) => void) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64Data = reader.result?.toString() || '';
      callback(base64Data);
    };
  }

  // getAudioByUserId(userId: string) {
  //   const apiUrl = `https://kisanmart.onrender.com/audio/user/:userId`; // Replace with your actual API endpoint

  //   this.http.get(apiUrl).subscribe(
  //     (response: any) => {
  //       this.audioList = response;
  //     },
  //     (error) => {
  //       console.error('Error getting audio data:', error);
  //     }
  //   );
  // }

  playAudio(base64Data: string) {
    const audio = new Audio();
    audio.src = `data:audio/wav;base64,${base64Data}`;
    audio.play();
  }
  pollForResponses() {
     // Poll every 10 seconds
  
   
      if (this.userId !== null) {
        this.getAudioByUserId(this.userId);
      }
  
  }
  
  getAudioByUserId(userId: string) {
    const apiUrl = `https://kisanmart.onrender.com/audio/user/${userId}`;
  
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        // Handle the received response
        console.log('Received response:', response);
  
        // Add the new recording to the array
        this.recordings.push(response.audioData);
        console.log("recordings",this.recordings)
        // Optionally, trigger any other action you need
      },
      (error) => {
        console.error('Error getting audio data:', error);
      }
    );
    
}


}

//--->posting the audio whos rec is moe then 0.5 sec

