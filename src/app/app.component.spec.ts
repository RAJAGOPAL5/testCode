import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './calculator';

describe('AppComponent', () => {


let component = new AppComponent;

beforeAll(() =>{
  console.log("Before All");
  
});

afterAll(() =>{
  console.log("After All");
  
});


  beforeEach(() => {
    console.log("Before Each");

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      
    });

    component = TestBed.createComponent(AppComponent).componentInstance;
  });

    afterEach(() => {
     console.log("AfterEach");
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testingSample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testingSample');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testingSample app is running!');
  });


  it('My Testcase',() =>{
    expect(true).toBe(true)
  });

  it("Show Message",() =>{
    expect(component.showMessgae("Hello")).toBe('Hello')
  });

  it("Addition",() =>{
    expect(Addition(10,20)).toBe(30);
    expect(Addition(10,20)).toBeGreaterThan(20);
  });

  it("ToBe and ToEqual for toBe",() =>{
    var a = 1;
    var b = 1;
    expect(a).toBe(b);
    
  });

  it("ToBe and ToEqual for Equal",() =>{
    var a = 1;
    var b = 1;
    expect(a).toEqual(b);
  });

  xit(" ToBe not working for Array ",() =>{
    var a = ['1'];
    var b = ['1'];
    expect(a).toBe(b);  
  });

  it(" ToEqual for Array ",() =>{
    var a = ['1'];
    var b = ['1'];
    expect(a).toEqual(b);  
  });



  it("ToBe  only for primitive DataType",() =>{
    var a = [1];
    var b = [1];
    expect(a).toEqual(b);
    
  });

  it("ToBe(true) Handles only primitive Boolean Type",() =>{
    var a = 'Hello';
    expect(a).toBe('Hello');
    
  });


  it("ToBeTrue() Handles Both primitive Boolean Type and boolean Object",() =>{
    var a = true;
    expect(a).toBeTrue();
    
  });



  it("ToBeFalse() Handles Both primitive Boolean Type and boolean Object",() =>{
    var a = false;
    expect(a).toBeFalse();
    
  });


  it('toBeFalsy', () =>{
    var a = true;
    expect(undefined).toBeFalsy("Hello")
  });


  it('toBeTruthy', () =>{
    var a = true;
    expect(undefined).toBeFalsy("Hello")
  });


  it('toBeGreaterThan', () =>{
    var a = 5;
    expect(a).toBeGreaterThan(4)
  });



  it('toBeGreaterThanOrEqual', () =>{
    var a = 5;
    expect(a).toBeGreaterThanOrEqual(5);
  });

  it('toBeLessThan', () =>{
    var a = 5;
    expect(a).toBeLessThan(6);
  });


  it('toBeLessThanOrEqual', () =>{
    var a = 5;
    expect(a).toBeLessThanOrEqual(5);
  });


  it('toMatcher for Regular Expression', () =>{
      var input = 'Twilight IT solutions';
      var strPhone = "962-914-44-87";
      expect(input).toMatch(/Twilight/);
      expect(input).toMatch(/Twilight/i);
      expect(input).not.toMatch(/Twilight1/);
      expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
  });


  it('toBeCloseTo is for decimal Precision', () => {
      var pi = 3.1415926, e = 2.78;
      expect(pi).not.toBeCloseTo(e);
      expect(pi).toBeCloseTo(e,0);
      expect(4.334).toBeCloseTo(4.3345,1);
      expect(4.334).toBeCloseTo(4.3345,2);
      expect(4.334).not.toBeCloseTo(4.3,2);
      expect(4.334).not.toBeCloseTo(4.22,3);
      expect(4.334).not.toBeCloseTo(4.22,4);

  });



  it("toBeDefined is for to check the intialized object, which return by the True or False", () =>{
    var myObj = {
       name: 'Raja'
    };
    var myFunction = (() =>{})();
    var strUndefined;
    var strDefined = "Hello";

    expect('Twilight').toBeDefined();
    expect(myObj).toBeDefined();
    expect(myObj.name).toBeDefined();
    expect(myFunction).not.toBeDefined();
    expect(strUndefined).not.toBeDefined();
    expect(strDefined).toBeDefined();

  });



  it("toBeUndefined is for to check the intialized object, which return by the True or False", () =>{
    var myObj = {
       name: 'Raja'
    };
    var myFunction = (() =>{})();
    var strUndefined;
    var strDefined = "Hello";

    expect(myObj).not.toBeUndefined();
    expect(myObj.name).not.toBeUndefined();
    expect(myFunction).toBeUndefined();
    expect(strUndefined).toBeUndefined();
    expect(strDefined).not.toBeUndefined();

  });



  it("toBeNull applied for to compare against null", () =>{
    var nullValue = null;
    var valueUndefined;
    var notNull = "notNull";
    expect(null).toBeNull();
    expect(nullValue).toBeNull();
    expect(valueUndefined).not.toBeNull();
    expect(notNull).not.toBeNull();
  });


  it("toContain applicable for finding an item in an array", () =>{
    var myArray = ["Jasmine","Lilly", "Lotus"];
    expect([1,2,3]).toContain(2);
    expect([1,2,3]).toContain(2, 3);
    expect(myArray).toContain("Jasmine");
    expect([1,2,3]).not.toContain(4);
    expect(myArray).not.toContain("Vanila")
  });

it("toBeNan Matcher applicable for finding an undetermined value", () =>{
  expect(0/0).toBeNaN();
  expect(0/5).not.toBeNaN();
});


it("Increase Count", () => {
  component.increaseCount(2);
  expect(component.count).toEqual(12)
});

it("Decrease Count", () => {
  component.decreaseCount(2);
  expect(component.count).toEqual(8)
});



//Arrange/Act/Assert

it("Arrange,Act,Assert", () => {
  //Arrange the component generically declared inside the beforeEach Method
  //Act
  let msg = component.showMessgae('Hello');
  //Assert
  expect(msg).toBe('Hello');


  
});


});
