const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send('Hello World!')
});

const arashi = [
  { id: 1, name: "Aiba"},
  { id: 2, name: "Matsumoto"},
  { id: 3, name: "Ninomiya"},
  { id: 4, name: "Ohno"},
  { id: 5, name: "Sakurai"},
];

app.get("/api/arashi", (req, res) => {
  res.send(arashi);
});

app.post("/api/arashi", (req, res) => {
  const newMember = {
    id: arashi.length + 1,
    name: req.body.name,
  };
  arashi.push(newMember);
  res.send(newMember);
});

app.put("/api/arashi/:id", (req, res) => {
  const member = arashi.find((member) => member.id === parseInt(req.params.id));
  member.name = req.body.name;
  res.send(member);
});

app.delete("/api/arashi/:id", (req, res) => {
  const member = arashi.find((member) => member.id === parseInt(req.params.id));
  const index = arashi.indexOf(member);
  arashi.splice(index, 1);
  res.send(member);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})