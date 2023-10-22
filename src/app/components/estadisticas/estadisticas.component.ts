import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { Firestore, collection, doc, getDocs } from '@angular/fire/firestore';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { format, parse } from 'date-fns';
import es from 'date-fns/locale/es';
import html2canvas from 'html2canvas';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'
import { AuthService } from 'src/app/service/auth-service.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {
  public listaJuegos: any[] = [];
  private  labels: any[] = [];
  private  datos: any[] = [];

  @ViewChild('chartContainer')
  chartContainer!: ElementRef;

  constructor(public firestore: Firestore, public auth: AuthService) {
    this.auth.getAuth().subscribe(auth =>{
      if(auth){
        var usuario : any = auth.email;

        const userDocRef = doc(this.firestore, 'Usuario', usuario);

        const postsCollectionRef = collection(userDocRef, 'Juegos');
        
        getDocs(postsCollectionRef).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const juegoData = doc.data();

            this.actualizarPrecioOAgregarNuevo(juegoData);
          });
        })
        .catch((error) => {
          console.error("Error al obtener la colección: ", error);
        });
    }

  });
  }

  actualizarPrecioOAgregarNuevo(juegos: any): void {
    const fechaCompra = juegos.fechaCompra;
    const precio = parseFloat(juegos.precio);

    const fecha = parse(fechaCompra, 'dd/MM/yyyy', new Date());
    const nombreMes = format(fecha, 'MMMM', { locale: es });
  
    
    // Buscar si ya existe un juego con la misma fecha en listaJuegos
    const juegoExistente = this.listaJuegos.find((juego) => {
      return juego.fechaCompra === nombreMes;
    });
  
    if (juegoExistente) {
      juegoExistente.precio = (parseInt(juegoExistente.precio) + precio).toString();
    } else {
      // Si la fecha no existe en listaJuegos, agrega un nuevo objeto
      this.listaJuegos.push({ fechaCompra: nombreMes, precio: juegos.precio });
    }
  }
  
  
  public resumen() {
    let chartItem: ChartItem = document.getElementById('myChart') as ChartItem
    Chart.register(...registerables);

    this.listaJuegos.forEach((juego) => {
      this.labels.push(juego.fechaCompra);
      this.datos.push(juego.precio);
    })

    const data = {
      labels: this.labels, 
      datasets: [{ label:'compras', data: this.datos}]
    };

    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Resumen de los juegos comprado por el usuario'
        }
      }
    }

    const config:ChartConfiguration  = {
      type: 'bar',
      data: data,
      options: options
    }; 

    new Chart(chartItem, config);
  }

  public downloadPDF() {
    const chartContainer = this.chartContainer.nativeElement;

    html2canvas(chartContainer, { scale: 2 }).then(canvas => {
      const imageData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF();

      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;

      pdf.addImage(imageData, 'JPEG', 0, 0, width, height);
      pdf.save('chart.pdf');
    });
  }
}
