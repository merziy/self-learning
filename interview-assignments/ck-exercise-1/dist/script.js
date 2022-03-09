//  Example API

const CREDIT_API = (detail, title) => {
  let data;
  if (detail !== "Age of Credit History") {
    data = parseInt(title);
  } else {
    let years = title.split(" ")[0];
    return years < 1 ? "bad" : years < 3 ? "avg" : "good";
  }
  if (detail === "Credit Card Utilization") {
    return data < 25 ? "good" : data > 50 ? "bad" : "avg";
  }
  if (detail === "Total Accounts") {
    return data > 8 ? "good" : data <= 3 ? "bad" : "avg";
  }
  if (detail === "Derogatory Marks") {
    return data < 2 ? "good" : data <= 5 ? "avg" : "bad";
  }
  if (detail === "Payment History") {
    return data > 80 ? "good" : data >= 60 ? "avg" : "bad";
  }
  if (detail === "Hard Inquiries") {
    return data < 2 ? "good" : data <= 5 ? "avg" : "bad";
  }
};

// AngularJS

var App = angular
  .module("creditScore", [])
  .controller("myController", function ($scope) {
    //
    // Credit Card Utilization
    $scope.creditNum = "24%";
    let creditUtilization = CREDIT_API("Credit Card Utilization", 24);

    let credit = document.getElementById("creditUtil");
    if (creditUtilization === "good") {
      credit.style.borderLeft = "5px solid #3FD792";
    } else if (creditUtilization === "avg") {
      credit.style.borderLeft = "5px solid #FEBA4B";
    } else {
      credit.style.borderLeft = "5px solid #FF6461";
    }

    // Payment History

    $scope.payNum = "99%";

    let paymentHist = CREDIT_API("Payment History", 99);

    let payHist = document.getElementById("paymentHist");
    if (paymentHist === "good") {
      payHist.style.borderLeft = "5px solid #3FD792";
    } else if (paymentHist === "avg") {
      payHist.style.borderLeft = "5px solid #FEBA4B";
    } else {
      payHist.style.borderLeft = "5px solid #FF6461";
    }

    // Derogatory Marks

    $scope.deMarkNum = 1;

    let derogMarks = CREDIT_API("Derogatory Marks", 5);

    let dMarks = document.getElementById("derogMarks");
    if (derogMarks === "good") {
      dMarks.style.borderLeft = "5px solid #3FD792";
    } else if (derogMarks === "avg") {
      dMarks.style.borderLeft = "5px solid #FEBA4B";
    } else {
      dMarks.style.borderLeft = "5px solid #FF6461";
    }

    // Age of Credit History

    $scope.ageNum = "6 yrs 7 mos";

    let ageCredit = CREDIT_API("Age of Credit History", "6 yrs 7 mos");

    let creditHist = document.getElementById("ageCredit");
    if (ageCredit === "good") {
      creditHist.style.borderLeft = "5px solid #3FD792";
    } else if (ageCredit === "avg") {
      creditHist.style.borderLeft = "5px solid #FEBA4B";
    } else {
      creditHist.style.borderLeft = "5px solid #FF6461";
    }

    // Total Accounts

    $scope.accNum = 14;

    let totalAcc = CREDIT_API("Total Accounts", 14);

    let totalAccounts = document.getElementById("totalAcc");
    if (totalAcc === "good") {
      totalAccounts.style.borderLeft = "5px solid #3FD792";
    } else if (totalAcc === "avg") {
      totalAccounts.style.borderLeft = "5px solid #FEBA4B";
    } else {
      totalAccounts.style.borderLeft = "5px solid #FF6461";
    }

    // Hard Inquiries

    $scope.inqNum = 1;

    let hardInq = CREDIT_API("Hard Inquiries", 1);

    let hardIn = document.getElementById("hardInq");
    if (hardInq === "good") {
      hardIn.style.borderLeft = "5px solid #3FD792";
    } else if (hardInq === "avg") {
      hardIn.style.borderLeft = "5px solid #FEBA4B";
    } else {
      hardIn.style.borderLeft = "5px solid #FF6461";
    }
  });

// ChartJS Graph
var options1 = {
  type: "doughnut",
  data: {
    labels: ["Red", "Orange", "Yellow", "Blue", "Green"],
    datasets: [
      {
        label: "Scores",
        data: [40, 10, 10, 10, 30],
        backgroundColor: [
          "#FF6161",
          "#FE873C",
          "#FCD428",
          "#0193FF",
          "#36DC95"
        ],
        borderColor: [
          "rgba(255, 255, 255 ,1)",
          "rgba(255, 255, 255 ,1)",
          "rgba(255, 255, 255 ,1)"
        ],
        borderWidth: 5
      }
    ]
  },
  options: {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    },
    cutoutPercentage: 95
  }
};

var ctx1 = document.getElementById("chartJSContainer").getContext("2d");
new Chart(ctx1, options1);

var options2 = {
  type: "doughnut",
  data: {
    labels: ["", "Bar", ""],
    datasets: [
      {
        data: [88.5, 1, 10.5],
        backgroundColor: [
          "rgba(0,0,0,0)",
          "rgba(255,255,255,1)",
          "rgba(0,0,0,0)"
        ],
        borderColor: [
          "rgba(0, 0, 0 ,0)",
          "rgba(46, 204, 113, 1)",
          "rgba(0, 0, 0 ,0)"
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    cutoutPercentage: 95,
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  }
};

var ctx2 = document.getElementById("secondContainer").getContext("2d");
new Chart(ctx2, options2);