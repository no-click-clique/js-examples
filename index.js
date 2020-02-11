document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Eatin`'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Cherries']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 6, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  });
});