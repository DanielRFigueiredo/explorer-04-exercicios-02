function CreateStudent(name, firstNota, secondNota) {
  this.name = name
  this.firstNota = firstNota
  this.secondNota = secondNota

  this.media = function () {
    return (this.firstNota + this.secondNota) / 2
  }
}


const students = [
  new CreateStudent('João', 10, 8),
  new CreateStudent('Maria', 6, 4),
  new CreateStudent('Clarice', 8, 7),
  new CreateStudent('Joaquim', 9, 9),
  new CreateStudent('Felipe', 3, 6),
  new CreateStudent('Claudia', 2, 4),
]

students.forEach(student => {
  alert(`
  A média do(a) aluno(a) ${student.name} é: ${student.media()}
  ${student.media() >= 7
      ? 'Parabéns, ' + student.name + '! você foi aprovado(a) no concurso!'
      : 'Não foi dessa vez, ' + student.name + '! Tente novamente!'
    }`)
})
