import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-gbarra',
  templateUrl: './gbarra.component.html',
  styleUrls: ['./gbarra.component.css'],
})
export class GbarraComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  //public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Coche' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Camioneta' }
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

  onGeneratePDF() {
    var id = document.getElementById('graphics');
    var pdf = new jsPDF({
      orientation: '1',
      unit: 'pt',
      format: 'carta'
    });
    pdf.text('Bar Chart', 180, 10);
    pdf.fromHTML(id, 100, 15);
    pdf.save('Graphics-' + new Date().getTime() + '.pdf');
  }
}