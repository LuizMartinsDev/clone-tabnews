function status(req, res) {
  res.status(200).json({ chave: "Alunos do curso.dev são geniais" });
}

export default status;
