$(document).ready(function(){
	$('.block').height($('.block').width());

	$(window).resize(function(){
		$('.block').height($('.block').width());
	});

	Chart.defaults.global.defaultFontColor = 'white';

	//Snelheid
	var snelheid = document.getElementById('snelheid').getContext('2d');
	var myLineChart = new Chart(snelheid, {
	    type: 'line',
	    data: {
	    	labels: ['','','','', '', '', '', '', '', ''],
	        datasets: [{
	            label: 'Snelheid (km/h)',
	            data: [0,1500, 3000, 4500, 6000, 6900, 6900, 6900, 6900, 6900, 8000],
	            borderColor: [
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 0)'
	            ],
	            pointBackgroundColor: [
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 1)',
	                'rgba(99, 255, 218, 0)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        },
	        legend: {
	            labels: {
	                // This more specific font property overrides the global property
	                fontColor: 'white',
	                fontSize: 18
	            }
	        }
	    }
	});

	//Brandstof
	var brandstof = document.getElementById('brandstof').getContext('2d');
	var myChart = new Chart(brandstof, {
	    type: 'bar',
	    data: {
	    	labels: [''],
	        datasets: [{
	            label: 'Brandstof (L)',
	            data: [1800, 3000],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.5)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)'
	            ],
	            borderWidth: 1,
	            barPercentage: 0.9
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        },
	        legend: {
	            labels: {
	                // This more specific font property overrides the global property
	                fontColor: 'white',
	                fontSize: 18
	            }
	        }
	    }
	});

	//Eten en drinken
	var eten = document.getElementById('eten').getContext('2d');
	var myLineChart = new Chart(eten, {
	    type: 'doughnut',
	    data: {
	    	labels: ['Drinken', 'Eten'],
	        datasets: [{
	        	label: 'Voorraden',
	            data: [34, 66],
	            backgroundColor: [
	                'rgba(99, 112, 255, 0.5)',
	                'rgba(99, 255, 126, 0.5)'
	            ],
	            borderColor: [
	                'rgba(99, 112, 255, 0.5)',
	                'rgba(99, 255, 126, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        legend: {
	            labels: {
	                // This more specific font property overrides the global property
	                fontColor: 'white',
	                fontSize: 18
	            }
	        }
	    }
	});
});