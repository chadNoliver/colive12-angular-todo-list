export class Task{

    name: any;
    date: any;
    pct: any;

    constructor(){
        this.setName();
        this.setDate(); 
        this.setPct(); 
    }

    setName():void {
        this.name="";
        while (this.isInvalidName()){
            this.name = prompt("Please enter a task name of at least one and up to 15 characters.", "");
        }
    }

    setDate():void {
        this.date ="";
        while (this.isInvalidDate()){
            this.date =prompt("Please enter a future due date in the format 'MM/DD/YYYY'.", "");
        }
    }

    setPct():void {
        this.pct = "";
        while (this.isInvalidPct()){
            this.pct = prompt("Please enter the progress completion percentage.", "");
        }
    }

    getName():void{
        return this.pct;
    }

    getDate():void{
        return this.pct;
    }

    getPct():void{
        return this.pct;
    }

    isInvalidName(): boolean{
        if (this.name.length > 15 || this.name.length < 1) {
            return true;
        }
        else return false;
    }

    isInvalidDate(): boolean{
        if (checkIfDate(this.date) && !(compareDates(getCurrentDate(),this.date))) {
            return false;
        }
        else return true;
    }

    isInvalidPct(): boolean{
        if(!Number.isInteger(parseInt(this.pct))){
            return true;
        }
        if (parseInt(this.pct) >100 || parseInt(this.pct) < 0){
            return true;
        }
        return false;
        } 
    }

    function checkIfDate(x:any) {
        if(x.length != 10) {
            return false;
        }

        if(x.charAt(0) != "0" && x.charAt(0) != "1") {
            return false;
        }

        if(!Number.isInteger(parseInt(x.charAt(1)))) {
            return false;
        }

        if(x.charAt(2) != "/") {
            return false;
        }

        if(x.charAt(3) != "0" && x.charAt(3) != "1" && x.charAt(3) != "2" && x.charAt(3) != "3") {
            return false;
        }

        if(!Number.isInteger(parseInt(x.charAt(4)))) {
            return false;
        }

        if(x.charAt(5) != "/") {
            return false;
        }

        if(!Number.isInteger(parseInt(x.charAt(6)))) {
            return false;
        }

        if(!Number.isInteger(parseInt(x.charAt(7)))) {
            return false;
        }

        if(!Number.isInteger(parseInt(x.charAt(8)))) {
            return false;
        }

        if(!Number.isInteger(parseInt(x.charAt(9)))) {
            return false;
        }

        return true;
    }

    // Get today's date
    function getCurrentDate():string {
        var todayString:string;
        var today = new Date();
        var day = String(today.getDate()).padStart(2, '0');
        var month = String(today.getMonth() + 1).padStart(2, '0');
        var year = today.getFullYear();

        todayString= month + "/" + day + "/" + year;

        return todayString;
    }

    // Compare dates
    function compareDates(x:any, y:any):boolean {
        var entYear = parseInt(x.substring(6));
        var entMonth = parseInt(x.substring(0));
        var entDay = parseInt(x.substring(3));

        var currYear = parseInt(y.substring(6));
        var currMonth = parseInt(y.substring(0));
        var currDay = parseInt(y.substring(3));

        if(entYear < currYear) {
            return false;
        } else if(entMonth < currMonth && entYear === currYear) {
            return false;
        } else if(entDay <= currDay && entMonth === currMonth && entYear === currYear) {
            return false;
        } else {
            return true;
        }
    }

