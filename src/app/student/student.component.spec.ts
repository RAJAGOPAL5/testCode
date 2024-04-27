import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { StudentComponent } from './student.component';
import { AppRoutingModule } from '../app-routing.module';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers: [StudentService],
      imports: [AppRoutingModule, HttpClientModule],
    });
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    const service = TestBed.inject(StudentService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("SpyOn Method", () =>{
    spyOn(component,'calculate');
    component.saveData();
    expect(component.calculate).toHaveBeenCalled();
  });

  it("SpyOn Method - 1", () =>{
    spyOn(component,'calculate').and.returnValues(10,20);
    let result = component.studentResult();
    expect(result).toEqual("Fail");
  });

  it("SpyOn Method - 2", () =>{
    spyOn(component,'calculate').and.returnValues(40,20);
    let result = component.studentResult();
    expect(result).toEqual("Pass");
  });

  it('should perform some action without making an actual HTTP request', () => {
    const studentService = TestBed.inject(StudentService);
    const saveDetailsSpy = spyOn(studentService, 'saveDetails').and.returnValue(of());

    // Call the method that triggers the HTTP request
    component.saveData();

    // Assert that the method was called and check the component's behavior
    expect(saveDetailsSpy).toHaveBeenCalled();
    expect(component.result).toEqual({ "result": 200 });
  });
});









// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { StudentService } from './student.service';
// import { HttpClientModule } from '@angular/common/http';
// import { of } from 'rxjs';
// import { StudentComponent } from './student.component';
// import { AppRoutingModule } from '../app-routing.module';

// describe('StudentComponent', () => {
//   let component: StudentComponent;
//   let fixture: ComponentFixture<StudentComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [StudentComponent],
//       providers: [StudentService],
//       imports: [AppRoutingModule, HttpClientModule],
//     });
//     fixture = TestBed.createComponent(StudentComponent);
//     component = fixture.componentInstance;
//     const service = TestBed.inject(StudentService); 
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it("SpyOn Method", () =>{
//     spyOn(component,'calculate');
//     component.saveData();
//     expect(component.calculate).toHaveBeenCalled();
//   });

//   it("SpyOn Method - 1", () =>{
//     spyOn(component,'calculate').and.returnValues(10,20);
//     let result = component.studentResult();
//     expect(result).toEqual("Fail");
//   });

//   it("SpyOn Method - 2", () =>{
//     spyOn(component,'calculate').and.returnValues(40,20);
//     let result = component.studentResult();
//     expect(result).toEqual("Pass");
//   });

//   // it("SpyOn Method - 3", () => {
//   //   let service = TestBed.inject(StudentService); 
//   //   spyOn(service,'saveDetails').and.callFake(() => of({ "result1": 200 }) as any); // Specify the return type explicitly
//   //   component.saveData();
//   //   expect(component.result).toEqual({ "result1": 200 });
//   // });
  
  
// }); 
