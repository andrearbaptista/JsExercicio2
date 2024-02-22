let student1={
  name:"Pedro",
  nota1:10,
  nota2:8
  }
let student2={
  name:"Letícia",
  nota1:7,
  nota2:10}

let student3={
  name:"Camila",
  nota1:7,
  nota2:5}



let media1=(student1.nota1+student1.nota2)/2
let media2=(student2.nota1+student2.nota2)/2
let media3=(student3.nota1+student3.nota2)/2


if(media1>=7){
  alert(student1.name + ", parabens! Você passou!")
}
else if (media1<7){
  alert('Que pena, '+ student1.name+ ', você ficou abaixo da média, terá que fazer a prova de recuperação.')
}

if(media2>=7){
  alert(student2.name + ", parabens! Você passou!")
}
else if (media2<7){
  alert('Que pena, '+ student2.name+ ', você ficou abaixo da média, terá que fazer a prova de recuperação.')
}

if(media3>=7){
  alert(student3.name + ", parabens! Você passou!")
}
else if (media3<7){
  alert('Que pena, '+ student3.name+ ', você ficou abaixo da média, terá que fazer a prova de recuperação.')
}

