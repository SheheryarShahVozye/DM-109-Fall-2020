import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FwdalgoService {

  constructor() { }
  graph:number[][]
  V:number = 2;
  INF:number = 9999;
  solution:String
  floydWarshallAlgorithm() {

   debugger;
   this.graph = [
    [0, 5, this.INF, 10],
   [this.INF, 0, 3, this.INF] ],
   [
   [this.INF, this.INF, 0, 1],
   [this.INF, this.INF, this.INF, 0]
   ]

   console.log(this.graph
    )
   let dist:number[][] = [[this.V],[this.V]]
   let  i, j, k;


   for (i = 0; i < this.V; i++) {
       for (j = 0; j < this.V; j++) {
           dist[i][j] = this.graph[i][j];
       }
   }


   for (k = 0; k < this.V; k++)
   {
       for (i = 0; i < this.V; i++)
       {
           for (j = 0; j < this.V; j++)
           {

               if (dist[i][k] + dist[k][j] < dist[i][j])
               {
                   dist[i][j] = dist[i][k] + dist[k][j];
               }
           }
       }
   }
   this.printSolution(dist)

}
printSolution(dist)
{
    console.log("Following matrix shows the shortest "+
                    "distances between every pair of vertices");
    let i , j
    for ( i = 0; i < this.V; ++i)
    {
        for (j = 0; j < this.V; ++j)
        {
            if (dist[i][j] == this.INF) {
                console.log("INF ");
            } else {
              console.log(dist[i][j] + " ");
            }
        }
        this.solution = dist[i][j] + " ";
        console.log();
    }
}
}
