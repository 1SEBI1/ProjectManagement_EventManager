window.onload = function() {

  const events = {
    events: [
      {
        title: "Open Day",
        start: new Date(2019, 09, 5, 12, 00, 00),
        end: new Date(2019, 09, 5, 13, 00, 00)
      },
      {
        title: "RGU Hack",
        start: new Date(2019, 10, 10, 09, 00, 00),
        end: new Date(2019, 10, 11, 13, 00, 00)
      },
      {
        title: "Department BBQ",
        start: new Date(2019, 09, 27, 12, 30, 00),
        end: new Date(2019, 09, 27, 22, 00, 00)
      },
      {
        title: "Meet & Greet",
        start: new Date(2019, 09, 21, 12, 00, 00),
        end: new Date(2019, 09, 21, 13, 00, 00)
      },
      {
        title: "Open Day",
        start: new Date(2019, 08, 5, 12, 00, 00),
        end: new Date(2019, 08, 5, 13, 00, 00)
      },
      {
        title: "RGU Hack",
        start: new Date(2019, 08, 10, 09, 00, 00),
        end: new Date(2019, 08, 11, 13, 00, 00)
      },
      {
        title: "Department BBQ",
        start: new Date(2019, 08, 27, 12, 45, 00),
        end: new Date(2019, 08, 27, 22, 00, 00)
      },
      {
        title: "Meet & Greet",
        start: new Date(2019, 08, 21, 12, 00, 00),
        end: new Date(2019, 08, 21, 13, 00, 00)
      },
      {
        title: "Open Day",
        start: new Date(2019, 10, 5, 12, 30, 00),
        end: new Date(2019, 10, 5, 13, 00, 00)
      },
      {
        title: "Department BBQ",
        start: new Date(2019, 11, 27, 12, 00, 00),
        end: new Date(2019, 11, 27, 22, 00, 00)
      },
      {
        title: "Meet & Greet",
        start: new Date(2019, 07, 21, 12, 00, 00),
        end: new Date(2019, 07, 21, 13, 00, 00)
      }
    ]
  };

  // Return object containing Date objects representing start and end dates
  // for the month given in the dateContext parameter provided by the caller.
  // https://stackoverflow.com/questions/13571700/get-first-and-last-date-of-current-month-with-javascript-or-jquery
  function getCalendarDateRange(dateContext) {
    return {
      begin: new Date(dateContext.getFullYear(), dateContext.getMonth(), 1),
      end: new Date(dateContext.getFullYear(), dateContext.getMonth() + 1, 0)
    };
  };

  function initialiseFullCalendar() {
    //document.addEventListener("DOMContentLoaded", function() {
      var el = document.getElementById("calendar-display");
      console.log(el);

      var calendar = new FullCalendar.Calendar(el, {
        plugins: [ "dayGrid" ],
        events: events,
        eventTimeFormat: {
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false
        },
        eventClick: function(info) {
          console.log(info);
          alert("Event: " + info.event.title + "\n" +
                "Start: " + info.event.start.toUTCString() + "\n" +
                "End: " + info.event.end.toUTCString());
        },
        eventRender: function(info) {
          console.log(info);
          let html = "<p>Just a popup.</p>"
          var popper = new Popper(info.el, html, {
            title: info.event.title,
            placement: "right",
            trigger: "hover"
          });
        }
      });

      calendar.render();
    //});
  };

  let testDate = new Date();
  //testDate.setMonth(12);
  //testDate.setYear(2019);
  //drawCalendar(testDate);
  initialiseFullCalendar();
};
