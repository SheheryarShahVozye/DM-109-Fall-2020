import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FwdalgoService {

  constructor() { }
  graph:number[][]
  V:number = 4;
  INF:number = 9999;
  result:any
  solution:String[] = new Array()
  floydWarshallAlgorithm() {

   debugger;
   this.graph = [
    [0, 5, this.INF, 10],
   [this.INF, 0, 3, this.INF],

   [this.INF, this.INF, 0, 1],
   [this.INF, this.INF, this.INF, 0]
   ]


   console.log(this.graph
    )
   let dist:number[][] = [[this.V],[this.V]]
   let  i, j, k;
     console.log(this.graph[2][1])

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
                this.solution.push("INF")
            } else {
              console.log(dist[i][j] + " ");
              this.solution.push(dist[i][j] + " ")
            }
        }


    }
    console.log(this.solution)
}

jsCodeRemaped(value)
{

	//Getting Input and converting to Matrix
   // console.log(taInput.value);
   debugger;
    var str=value;


    var tempArray = str.split('\n');


    debugger;
    this.graph = value;
    console.log(tempArray)

    var finalArray = [];
    for (var i = 0; i < tempArray.length; i++) {
      finalArray[i] = tempArray[i].split(',') ;
    }

    var matrix = finalArray;
    for(var i=0;i<finalArray.length;i++)
    {
      for(var j=0;j<finalArray.length;j++)
      {
        matrix[i][j] = parseInt(finalArray[i][j]);
      }
    }
    console.log("Now Function Output: ")

     var dist = [];
      var size = matrix.length;
      for (var i = 0; i < size; i += 1) {
        dist[i] = [];
        for (var j = 0; j < size; j += 1) {
          if (i === j) {
            dist[i][j] = 0;
          } else if (!isFinite(matrix[i][j])) {
            dist[i][j] = Infinity;
          } else {
            dist[i][j] = matrix[i][j];
          }
        }
      }
      var size = matrix.length;
      for (var k = 0; k < size; k += 1) {
        for (var i = 0; i < size; i += 1) {
          for (var j = 0; j < size; j += 1) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
              dist[i][j] = dist[i][k] + dist[k][j];
            }
          }
        }
      }

    var output= dist;
    this.result = output;
    console.log(output);
}

}
