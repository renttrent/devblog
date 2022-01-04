export default function projectHandler({ query: { id }}, res) {
  if(id === "1") {
    res.status(200).json({
      "id": "1",
      "title": "How to learn web3",
      "body": "Okay so the second step..."
    })
  } else {
    res.status(404).json({message: "project not found"})
  }
}