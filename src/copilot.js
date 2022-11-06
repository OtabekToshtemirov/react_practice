function  calculateDaysBetweenDates(begin,end){
        var  beginDate = new Date(begin);
        var  endDate = new Date(end);
        var  timeDiff = endDate.getTime() - beginDate.getTime();
        var  diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
        return  diffDays;
}

// Return the current date
function  getCurrentDate(){
        var  currentDate = new Date();
        var  day = currentDate.getDate();
        var  month = currentDate.getMonth() + 1;
        var  year = currentDate.getFullYear();
        return  year + "-" + month + "-" + day;
}
getCurrentDate();
calculateDaysBetweenDates("2017-01-01","2017-01-05");