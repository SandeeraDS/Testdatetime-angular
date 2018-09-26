import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Uthpala';


    //dataObject:{id:string,name:string};


    ngOnInit() {


        const startdate = new Date(2018, 8, 1);
        let endtdate = new Date(2018, 8, 10);

        var diff = Math.abs(endtdate.getTime() - startdate.getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));

        let data: Date[] = new Array(diffDays + 1);
        
        var i = 0;
        for (i; i <= diffDays; i++) {
          var datex:Date=startdate;
          console.log(startdate);
          console.log(i);
            data[i] = new Date(datex.setTime(datex.getTime() + (i * (1000 * 60 * 60 * 24))));
        }
        

          for(var j=0;j<data.length;j++){
            console.log(data[j]);
          }

        // let newDate=startdate.setTime(startdate.getTime() + (1 * (1000 * 60 * 60 * 24)));
        // console.log(startdate);




    }



}
