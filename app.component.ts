import { Component } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pattern';
num1:number;
  check_number(){
    alert("function called");
    this.num1=document.getElementById("txtNumber").value;
  /*if(this.num1%2==0){
      document.getElementById("result").innerHTML=this.num1+" is even"
    }
    else{
      document.getElementById("result").innerHTML=this.num1+" is odd"
    }*/
/*var resultStr="";
    for(var i=1;i<=this.num1;i++){
      for(var j=1;j<=this.num1;j++){
        resultStr=resultStr+"*";
      }
      resultStr=resultStr+'<br/>';
    }
    document.getElementById("result").innerHTML=resultStr;
    */
   var t1=0,t2=1,nextterm;
 var resultStr="fibanocci series is"+" ";
 for(var i=1;i<=this.num1;i++){
     resultStr=resultStr+t1;
     nextterm=t1+t2;
     t1=t2;
     t2=nextterm;
 }
document.getElementById("result").innerHTML=resultStr;
  }
}
