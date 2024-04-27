import { Component, OnInit } from '@angular/core';
import  { StudentService } from './student.service';
// import { StudentService } from './student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit{
  
  sum =0;
  result:any;
  constructor(public service:StudentService){}

  ngOnInit (): void
  {  }

  calculate(num1: number, num2: number){
    this.sum = num1 + num2;
    return this.sum
  }

saveData(){
  let info = {
    sunVal: this.calculate(5,5),
    name: 'Twilight'
  };
  this.SaveDataIntoConsole(info);
  this.service.SaveDetails(info).subscribe((response: any) => {
    this.result = response;
  });
}

studentResult(){
  if(this.calculate(10,20) >= 40 )
    {
      return 'Pass';
    }
    else
    {
      return 'Fail'
    }
}

studentSchoolResult(){
  if(this.calculate(10,20) >= 40){
    this.studentResult = 'Pass';
    return this.studentResult;
  }
  else{
    this.studentResult = 'Fail';
    return this.studentResult;
  }
}

  SaveDataIntoConsole ( info: { sunVal: number; name: string; } )
  {
    // throw new Error( 'Method not implemented.' );
    console.log(info);
    
  }
  
}
